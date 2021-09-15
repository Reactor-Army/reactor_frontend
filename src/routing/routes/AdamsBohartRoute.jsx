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
  ButtonWrapper,
  FormContainer,
  ContentWrapper,
  AdvertisementWrapper,
  LoaderWrapper,
} from "../../components/ChemicalModels/Models/ModelsStyles";
import {Results} from "../../components/ChemicalModels/Models/Results";
import {ErrorModal} from "../../components/ChemicalModels/ErrorModal";
import {FileUpload} from "../../components/ChemicalModels/FileUpload";
import {Button} from "../../components/Button/Button";
import {AppAdvertisement} from "../../components/AppAdvertisement/AppAdvertisement";
import {CircularProgress} from "@material-ui/core";
import {HelpText} from "../../components/ChemicalModels/ChemicalModelStyles";
import {settings} from "../../config/settings";
import {InfoAdamsBohartModal} from "../../components/ChemicalModels/InfoAdamsBohartModal";
import {AdamsBohartInputFields} from "../../components/ChemicalModels/Models/AdamsBohartInputFields";

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
    } catch (e) {
      setError({
        message: e.response.data.message,
        index: index,
      });
      setResponses([]);
      return false;
    }
    setResponses((prev) => [
      ...prev,
      {
        F: values[ADAMS_BOHART_REQUEST_FIELDS.FLOW],
        Z: values[ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT],
        C0: values[ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION],
        U0: values[ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY],
        Kab: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.KAB],
        N0: apiResponse[ADAMS_BOHART_RESPONSE_FIELDS.N0],
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
    for (let i = 0; i < files.length; i++) {
      const success = await submitFile(files[i], values, i + 1);
      if (!success) {
        break;
      }
    }
    setShowLoader(false);
  };

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
          <>
            <Results
              responses={responses}
              inputFields={
                <AdamsBohartInputFields
                  F={inputValues.caudalVolumetrico}
                  C0={inputValues.concentracionInicial}
                  Z={inputValues.alturaLechoReactor}
                  U0={inputValues.velocidadLineal}
                />
              }
            />
            <ButtonWrapper>
              <Button
                size="medium"
                text="Volver a graficar"
                onClick={() => {
                  setResponses([]);
                  setNewFiles([]);
                }}
              />
            </ButtonWrapper>
          </>
        ) : (
          <>
            <HelpText>
              Calcula el coeficiente de transferencia de masa (Kab) y la
              capacidad máxima de adsorción (N₀) en base a un archivo de
              observaciones. Las observaciones deben ser subidas como un archivo
              CSV (exportable desde Excel u otro software similar de planillas
              de cálculo), con dos columnas: &quot;volumenEfluente&quot; medido
              en mililitros y &quot;C/C₀&quot;. Se pueden subir varios archivos
              CSV, y el modelo se calculará para cada archivo de observaciones
              de manera independiente, y se graficarán y mostraran resultados
              para todos al mismo tiempo. La máxima cantidad de modelos que se
              pueden ejecutar son {settings.MAX_MODELS}.
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
                  <AdvertisementWrapper>
                    <AppAdvertisement />
                  </AdvertisementWrapper>
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
