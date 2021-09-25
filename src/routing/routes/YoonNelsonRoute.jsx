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
import {InfoYoonNelsonModal} from "../../components/ChemicalModels/InfoYoonNelsonModal";
import {YoonNelsonInputFields} from "../../components/ChemicalModels/Models/YoonNelsonInputFields.jsx";
import {YoonNelsonModelPlot} from "../../components/ChemicalModels/Models/Plots/YoonNelsonModelPlot";
import {
  DataFrame,
  Title,
} from "../../components/ChemicalModels/Models/ModelsStyles";
import {YoonNelsonResultFields} from "../../components/ChemicalModels/Models/YoonNelsonResultFields";
import {appColors} from "../../common/styles";
import {
  generateEquation,
  yoonNelsonCoefficients,
} from "../../components/ChemicalModels/Models/equations";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

const yoonNelsonEquation = (data) => {
  const exponential = "e^{firstV{ef}-second}";
  const template = `$$\\frac{C}{C0} = \\frac{${exponential}}{1 + ${exponential}}$$`;
  return generateEquation(template, yoonNelsonCoefficients(data));
};

export const YoonNelsonRoute = () => {
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
      apiResponse = await applyYoonNelsonModel(file, values);
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
        F: values[YOON_NELSON_REQUEST_FIELDS.FLOW],
        Kyn: apiResponse[YOON_NELSON_RESPONSE_FIELDS.KYN],
        // eslint-disable-next-line id-length
        t: apiResponse[YOON_NELSON_RESPONSE_FIELDS.FIFTY_PERCENT_TIME],
        R2: apiResponse[YOON_NELSON_RESPONSE_FIELDS.R2],
        points: apiResponse[
          YOON_NELSON_RESPONSE_FIELDS.OBSERVATIONS
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
          title={"Modelo de Yoon-Nelson"}
          onInfoIconClick={() => setOpenModal(true)}
        />
      </Row>
      <InfoYoonNelsonModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      />
      <PageLayout>
        {responses.length > 0 && responses.length === files.length ? (
          <>
            <Results
              inputFields={
                <YoonNelsonInputFields F={inputValues.caudalVolumetrico} />
              }
              resultsInfo={responses.map((response, index) => (
                <DataFrame key={index}>
                  <Title color={colors[index % colors.length]}>
                    Resultados gráfico {++index}
                  </Title>
                  <YoonNelsonResultFields
                    Kyn={response.Kyn}
                    t={response.t}
                    R2={response.R2}
                    equation={yoonNelsonEquation(response)}
                  />
                </DataFrame>
              ))}
              plot={
                <YoonNelsonModelPlot
                  points={responses.map((response) => response.points)}
                  expressions={responses}
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
              Calcula la constante de velocidad de Yoon-Nelson (Kyn) y el tiempo
              requerido para retener el 50% de la C₀ (𝜏) en base a un archivo de
              datos. Los datos deben ser subidas como un archivo CSV o XLSX
              (Excel), con dos columnas: &quot;volumenEfluente&quot; medido en
              mililitros y &quot;C/C₀&quot;. Se pueden subir varios archivos, y
              el modelo se calculará para uno de manera independiente, y se
              graficarán y mostraran resultados para todos al mismo tiempo. La
              máxima cantidad de modelos que se pueden ejecutar son{" "}
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
                    <YoonNelsonModelForm
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
