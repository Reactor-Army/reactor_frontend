import React, {useState, useEffect} from "react";
import {ModelTitle} from "../../common/ModelTitle";
import {Row} from "../../common/styles";
import {applyAdamsBohartModel} from "../../services/models";
import {AdamsBohartModelForm} from "../../components/ChemicalModels/Models/AdamsBohartModelForm";
import {
  ADAMS_BOHART_REQUEST_FIELDS,
  ADAMS_BOHART_RESPONSE_FIELDS,
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
import {InfoAdamsBohartModal} from "../../components/ChemicalModels/InfoModals/InfoAdamsBohartModal";
import {addModel, reset} from "../../redux/modelDataSlice";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {modelResultsUrlFor} from "../urls";
import {MODEL_TYPES, MODEL_ALIAS} from "../../common/constants";
import {fetchModelData} from "../../redux/modelDataSlice";
import {LoadScreen} from "../../components/LoadScreen/LoadScreen";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const AdamsBohartRoute = () => {
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [freeDataReady, setFreeDataReady] = useState(false);
  const {loggedIn} = useSelector((state) => state.auth);

  const getFreeModelData = async () => {
    let apiResponse;
    try {
      apiResponse = await dispatch(fetchModelData(MODEL_ALIAS.ADAMS_BOHART));
    } catch (error) {
      setError({
        message: error.response.data.message,
      });
      return false;
    }
    dispatch(
      addModel({
        // eslint-disable-next-line id-length
        F: apiResponse.payload.request[ADAMS_BOHART_REQUEST_FIELDS.FLOW],
        // eslint-disable-next-line id-length
        Z:
          apiResponse.payload.request[
            ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT
          ],
        C0:
          apiResponse.payload.request[
            ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION
          ],
        U0:
          apiResponse.payload.request[
            ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY
          ],
        Kab: apiResponse.payload.response[ADAMS_BOHART_RESPONSE_FIELDS.KAB],
        N0: apiResponse.payload.response[ADAMS_BOHART_RESPONSE_FIELDS.N0],
        R2: apiResponse.payload.response[ADAMS_BOHART_RESPONSE_FIELDS.R2],
        dataId: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.DATA_ID],
        points: apiResponse.payload.response[
          ADAMS_BOHART_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
        modelType: MODEL_TYPES.ADAMS_BOHART,
      }),
    );
    setError(INITIAL_ERROR);
    setFreeDataReady(true);
    return true;
  };

  const submitFile = async (file, values, index) => {
    let apiResponse;
    try {
      apiResponse = await applyAdamsBohartModel(file, values);
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
        F: values[ADAMS_BOHART_REQUEST_FIELDS.FLOW],
        // eslint-disable-next-line id-length
        Z: values[ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT],
        C0: values[ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION],
        U0: values[ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY],
        Kab: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.KAB],
        N0: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.N0],
        R2: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.R2],
        points: apiResponse[
          ADAMS_BOHART_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
        modelType: MODEL_TYPES.ADAMS_BOHART,
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
              title={"Modelo de Adams-Bohart"}
              onInfoIconClick={() => setOpenModal(true)}
            />
          </Row>
          <InfoAdamsBohartModal
            closeModal={() => setOpenModal(false)}
            openModal={openModal}
          />
          <PageLayout>
            <>
              <HelpText>
                Calcula el coeficiente de transferencia de masa (K<sub>AB</sub>)
                y la capacidad máxima de adsorción (N₀) en base a un archivo de
                datos. Los datos deben ser subidos como un archivo CSV o XLSX
                (Excel), con dos columnas: &quot;volumenEfluente&quot; medido en
                mililitros y &quot;C/C₀&quot;.Se pueden subir hasta&nbsp;
                {settings.MAX_MODELS} archivos. El programa calculará los
                parámetros del modelo para cada archivo en forma independiente.
                Se graficarán y mostrarán todos los resultados al mismo tiempo.
                {settings.MAX_MODELS}.
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
                      <AdamsBohartModelForm
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
