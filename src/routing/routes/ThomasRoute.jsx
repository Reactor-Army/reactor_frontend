import React, {useState} from "react";
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
  ButtonWrapper,
  FormContainer,
  ContentWrapper,
  TemplateHelpWrapper,
  LoaderWrapper,
} from "../../components/ChemicalModels/Models/ModelsStyles";
import {Results} from "../../components/ChemicalModels/Models/Results";
import {ErrorModal} from "../../components/ChemicalModels/ErrorModal";
import {FileUpload} from "../../components/ChemicalModels/FileUpload";
import {Button} from "../../components/Button/Button";
import {TemplateFileHelp} from "../../components/TemplateFileHelp/TemplateFileHelp";
import {CircularProgress} from "@material-ui/core";
import {HelpText} from "../../components/ChemicalModels/ChemicalModelStyles";
import {settings} from "../../config/settings";
import {InfoThomasModal} from "../../components/ChemicalModels/InfoThomasModal";
import {ThomasInputFields} from "../../components/ChemicalModels/Models/ThomasInputFields";
import {ThomasModelPlot} from "../../components/ChemicalModels/Models/Plots/ThomasModelPlot";
import {
  DataFrame,
  Title,
} from "../../components/ChemicalModels/Models/ModelsStyles";
import {ThomasResultFields} from "../../components/ChemicalModels/Models/ThomasResultFields";
import {appColors} from "../../common/styles";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const ThomasRoute = () => {
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
      apiResponse = await applyThomasModel(file, values);
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
        F: values[THOMAS_REQUEST_FIELDS.FLOW],
        // eslint-disable-next-line id-length
        W: values[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
        C0: values[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION],
        Kth: apiResponse[THOMAS_RESPONSE_FIELDS.KTH],
        q0: apiResponse[THOMAS_RESPONSE_FIELDS.Q0],
        points: apiResponse[
          THOMAS_RESPONSE_FIELDS.OBSERVATIONS
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
          title={"Modelo de Thomas"}
          onInfoIconClick={() => setOpenModal(true)}
        />
      </Row>
      <InfoThomasModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      />
      <PageLayout>
        {responses.length > 0 && responses.length === files.length ? (
          <>
            <Results
              inputFields={
                <ThomasInputFields
                  F={inputValues.caudalVolumetrico}
                  C0={inputValues.concentracionInicial}
                  W={inputValues.sorbenteReactor}
                />
              }
              resultsInfo={responses.map((response, index) => (
                <DataFrame key={index}>
                  <Title color={colors[index % colors.length]}>
                    Resultados gráfico {++index}
                  </Title>
                  <ThomasResultFields kth={response.Kth} q0={response.q0} />
                </DataFrame>
              ))}
              plot={
                <ThomasModelPlot
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
              Calcula la constante de Thomas (Kth) y la concentración máxima del
              soluto (q₀) en base a un archivo de datos. Los datos deben ser
              subidas como un archivo CSV o XLSX (Excel), con dos columnas:
              &quot;volumenEfluente&quot; medido en mililitros y
              &quot;C/C₀&quot;. Se pueden subir varios archivos, y el modelo se
              calculará para cada uno de manera independiente, y se graficarán y
              mostraran resultados para todos al mismo tiempo. La máxima
              cantidad de modelos que se pueden ejecutar son{" "}
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
        )}
      </PageLayout>
      <ErrorModal closeModal={() => setError(INITIAL_ERROR)} error={error} />
    </>
  );
};
