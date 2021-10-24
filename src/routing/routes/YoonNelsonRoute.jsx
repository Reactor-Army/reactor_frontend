import React, {useState} from "react";
import {ModelTitle} from "../../common/ModelTitle";
import {Row} from "../../common/styles";
import {applyYoonNelsonModel} from "../../services/models";
import {YoonNelsonModelForm} from "../../components/ChemicalModels/Models/YoonNelsonModelForm";
import {
  YOON_NELSON_REQUEST_FIELDS,
  YOON_NELSON_RESPONSE_FIELDS,
} from "../../common/fields";
import {
  PageLayout,
  FormContainer,
  ContentWrapper,
  TemplateHelpWrapper,
  LoaderWrapper,
} from "../../components/ChemicalModels/Models/ModelsStyles";
import {ErrorModal} from "../../components/ChemicalModels/ErrorModal";
import {FileUpload} from "../../components/ChemicalModels/FileUpload";
import {TemplateFileHelp} from "../../components/TemplateFileHelp/TemplateFileHelp";
import {CircularProgress} from "@material-ui/core";
import {HelpText} from "../../components/ChemicalModels/ChemicalModelStyles";
import {settings} from "../../config/settings";
import {InfoYoonNelsonModal} from "../../components/ChemicalModels/InfoModals/InfoYoonNelsonModal";
import {MODEL_TYPES} from "../../common/constants";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {addModel, reset} from "../../redux/modelDataSlice";
import {modelResultsUrlFor} from "../urls";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const YoonNelsonRoute = () => {
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitFile = async (file, values, index) => {
    let apiResponse;
    try {
      apiResponse = await applyYoonNelsonModel(file, values);
    } catch (error) {
      setError({
        message: error.response.data.message,
        index: index,
      });
      return false;
    }
    dispatch(
      addModel({
        // eslint-disable-next-line id-length
        F: values[YOON_NELSON_REQUEST_FIELDS.FLOW],
        Kyn: apiResponse[YOON_NELSON_RESPONSE_FIELDS.KYN],
        // eslint-disable-next-line id-length
        t: apiResponse[YOON_NELSON_RESPONSE_FIELDS.FIFTY_PERCENT_TIME],
        R2: apiResponse[YOON_NELSON_RESPONSE_FIELDS.R2],
        points: apiResponse[
          YOON_NELSON_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
        modelType: MODEL_TYPES.YOON_NELSON,
      }),
    );
    setError(INITIAL_ERROR);
    return true;
  };

  const onSubmit = async (values) => {
    dispatch(reset());
    let success;
    for (let index = 0; index < files.length; index++) {
      success = await submitFile(files[index], values, index + 1);
      if (!success) {
        break;
      }
    }

    if (success) history.push(modelResultsUrlFor("resultado"));
    setShowLoader(false);
  };

  return (
    <>
      <Row>
        <ModelTitle
          title={"Modelo de Yoon-Nelson"}
          onInfoIconClick={() => setOpenModal(true)}
        />
      </Row>
      <InfoYoonNelsonModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      />
      <PageLayout>
        <HelpText>
          Calcula la constante de velocidad de Yoon-Nelson (K<sub>YN</sub>) y el
          tiempo requerido para retener el 50% de la C₀ (𝜏) en base a un archivo
          de datos. Los datos deben ser subidos como un archivo CSV o XLSX
          (Excel), con dos columnas: &quot;volumenEfluente&quot; medido en
          mililitros y &quot;C/C₀&quot;. Se pueden subir hasta&nbsp;
          {settings.MAX_MODELS} archivos. El programa calculará los parámetros
          del modelo para cada archivo en forma independiente. Se graficarán y
          mostrarán todos los resultados al mismo tiempo.
        </HelpText>
        <ContentWrapper>
          {showLoader ? (
            <LoaderWrapper>
              <CircularProgress />
            </LoaderWrapper>
          ) : (
            <>
              <FormContainer>
                <FileUpload files={files} setNewFiles={setNewFiles} />
                <YoonNelsonModelForm
                  forceDisable={files.length === 0}
                  onSubmit={(values) => {
                    onSubmit(values);
                    setShowLoader(true);
                  }}
                />
              </FormContainer>
              <TemplateHelpWrapper>
                <TemplateFileHelp
                  url={`${settings.BACKEND_URL}curvas-ruptura/ejemplo/`}
                />
              </TemplateHelpWrapper>
            </>
          )}
        </ContentWrapper>
      </PageLayout>
      <ErrorModal closeModal={() => setError(INITIAL_ERROR)} error={error} />
    </>
  );
};
