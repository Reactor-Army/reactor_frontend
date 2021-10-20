import React, {useState} from "react";
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
import {appColors} from "../../common/styles";
import {AdamsBohartResults} from "../../components/ChemicalModels/Results/AdamsBohartResults";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const AdamsBohartRoute = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);
  const [inputValues, setInputValues] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const submitFile = async (file, values, index) => {
    setInputValues(values);
    let apiResponse;
    try {
      apiResponse = await applyAdamsBohartModel(file, values);
    } catch (error) {
      setError({
        message: error.response.data.message,
        index: index,
      });
      setResponses([]);
      return false;
    }
    setResponses((prev) => [
      ...prev,
      {
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
      },
    ]);
    setError(INITIAL_ERROR);
    return true;
  };

  const onSubmit = async (values) => {
    setResponses([]);
    for (let index = 0; index < files.length; index++) {
      const success = await submitFile(files[index], values, index + 1);
      if (!success) {
        break;
      }
    }
    setShowLoader(false);
  };
  const colors = [appColors.primary, appColors.red, appColors.green];

  return (
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
        {responses.length > 0 && responses.length === files.length ? (
          <AdamsBohartResults
            inputValues={inputValues}
            responses={responses}
            colors={colors}
            onClick={() => {
              setResponses([]);
              setNewFiles([]);
            }}
          />
        ) : (
          <>
            <HelpText>
              Calcula el coeficiente de transferencia de masa (K<sub>AB</sub>) y
              la capacidad máxima de adsorción (N₀) en base a un archivo de
              datos. Los datos deben ser subidos como un archivo CSV o XLSX
              (Excel), con dos columnas: &quot;volumenEfluente&quot; medido en
              mililitros y &quot;C/C₀&quot;.Se pueden subir hasta&nbsp;
              {settings.MAX_MODELS} archivos. El programa calculará los
              parámetros del modelo para cada archivo en forma independiente. Se
              graficarán y mostrarán todos los resultados al mismo tiempo.
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
        )}
      </PageLayout>
      <ErrorModal closeModal={() => setError(INITIAL_ERROR)} error={error} />
    </>
  );
};
