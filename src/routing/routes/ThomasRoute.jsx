import React, {useEffect, useState} from "react";
import {ModelTitle} from "../../common/ModelTitle";
import {Row} from "../../common/styles";
import {applyThomasModel} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Models/ThomasModelForm";
import {
  THOMAS_REQUEST_FIELDS,
  THOMAS_RESPONSE_FIELDS,
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
import {InfoThomasModal} from "../../components/ChemicalModels/InfoModals/InfoThomasModal";
import {useDispatch, useSelector} from "react-redux";
import {addModel, reset} from "../../redux/modelDataSlice";
import {useHistory} from "react-router-dom";
import {modelResultsUrlFor} from "../urls";
import {MODEL_ALIAS} from "../../common/constants";
import {fetchModelData} from "../../redux/modelDataSlice";
import {LoadScreen} from "../../components/LoadScreen/LoadScreen";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const ThomasRoute = () => {
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {loggedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [freeDataReady, setFreeDataReady] = useState(false);

  const getFreeModelData = async () => {
    let apiResponse;
    try {
      apiResponse = await dispatch(fetchModelData(MODEL_ALIAS.THOMAS));
    } catch (error) {
      setError({
        message: error.response.data.message,
      });
      return false;
    }
    dispatch(
      addModel({
        // eslint-disable-next-line id-length
        F: apiResponse.payload.request[THOMAS_REQUEST_FIELDS.FLOW],
        // eslint-disable-next-line id-length
        W: apiResponse.payload.request[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
        C0:
          apiResponse.payload.request[
            THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION
          ],
        Kth: apiResponse.payload.response[THOMAS_RESPONSE_FIELDS.KTH],
        q0: apiResponse.payload.response[THOMAS_RESPONSE_FIELDS.Q0],
        R2: apiResponse.payload.response[THOMAS_RESPONSE_FIELDS.R2],
        points: apiResponse.payload.response[
          THOMAS_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
        modelType: MODEL_ALIAS.THOMAS,
      }),
    );
    setError(INITIAL_ERROR);
    setFreeDataReady(true);
    return true;
  };

  const submitFile = async (file, values, index) => {
    let apiResponse;
    try {
      apiResponse = await applyThomasModel(file, values);
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
        F: values[THOMAS_REQUEST_FIELDS.FLOW],
        // eslint-disable-next-line id-length
        W: values[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
        C0: values[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION],
        Kth: apiResponse[THOMAS_RESPONSE_FIELDS.KTH],
        q0: apiResponse[THOMAS_RESPONSE_FIELDS.Q0],
        R2: apiResponse[THOMAS_RESPONSE_FIELDS.R2],
        points: apiResponse[
          THOMAS_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
        modelType: MODEL_ALIAS.THOMAS,
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

  useEffect(() => {
    if (!loggedIn) {
      if (!freeDataReady) {
        dispatch(reset());
        getFreeModelData();
      } else {
        history.push(modelResultsUrlFor("resultado"));
      }
    }
  }, [freeDataReady]);

  return (
    <>
      {loggedIn ? (
        <>
          <Row>
            <ModelTitle
              title={"Modelo de Thomas"}
              onInfoIconClick={() => setOpenModal(true)}
            />
          </Row>
          <InfoThomasModal
            closeModal={() => setOpenModal(false)}
            openModal={openModal}
          />
          <PageLayout>
            <>
              <HelpText>
                Calcula la constante de Thomas (K<sub>Th</sub>) y la
                concentración máxima del soluto (q₀) en base a un archivo de
                datos. Los datos deben ser subidos como un archivo CSV o XLSX
                (Excel), con dos columnas: &quot;volumenEfluente&quot; medido en
                mililitros y &quot;C/C₀&quot;. Se pueden subir hasta{" "}
                {settings.MAX_MODELS}
                &nbsp;archivos. El programa calculará los parámetros del modelo
                para cada archivo en forma independiente. Se graficarán y
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
                      <ThomasModelForm
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
            </>
          </PageLayout>
          <ErrorModal
            closeModal={() => setError(INITIAL_ERROR)}
            error={error}
          />
        </>
      ) : (
        <LoadScreen loadingText="Redirigiendo a muestra para usuarios invitados" />
      )}
    </>
  );
};
