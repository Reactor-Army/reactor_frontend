import React, {useState} from "react";
import {ModelTitle} from "../../common/ModelTitle";
import {Row} from "../../common/styles";
import {thomas} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Models/ThomasModelForm";
import {
  THOMAS_REQUEST_FIELDS,
  THOMAS_RESPONSE_FIELDS,
} from "../../common/fields";
import {
  ThomasPageLayout,
  ButtonWrapper,
  FormContainer,
  ContentWrapper,
  AdvertisementWrapper,
  LoaderWrapper,
} from "../../components/ChemicalModels/Models/ThomasStyles";
import {ThomasHelpText} from "../../components/ChemicalModels/Models/ThomasHelpText";
import {ThomasResults} from "../../components/ChemicalModels/Models/ThomasResults";
import {ErrorModal} from "../../components/ChemicalModels/ErrorModal";
import {FileUpload} from "../../components/ChemicalModels/FileUpload";
import {Button} from "../../components/Button/Button";
import {AppAdvertisement} from "../../components/AppAdvertisement/AppAdvertisement";
import {CircularProgress} from "@material-ui/core";

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const YoonNelsonRoute = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);
  const [inputValues, setInputValues] = useState();
  const [showLoader, setShowLoader] = useState(false);

  const submitFile = async (file, values, index) => {
    setInputValues(values);
    let apiResponse;
    try {
      apiResponse = await thomas(file, values);
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
        F: values[THOMAS_REQUEST_FIELDS.FLOW],
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
        <ModelTitle title={"Modelo de Yoon-Nelson"} />
      </Row>
      <ThomasPageLayout>
        {responses.length > 0 && responses.length === files.length ? (
          <>
            <ThomasResults responses={responses} inputValues={inputValues} />
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
            <ThomasHelpText />
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
                  <AdvertisementWrapper>
                    <AppAdvertisement />
                  </AdvertisementWrapper>
                </>
              )}
            </ContentWrapper>
          </>
        )}
      </ThomasPageLayout>
      <ErrorModal closeModal={() => setError(INITIAL_ERROR)} error={error} />
    </>
  );
};
