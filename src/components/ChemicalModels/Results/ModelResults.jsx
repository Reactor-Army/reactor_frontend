import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React, {useState, useEffect} from "react";
import {appColors, Row} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";
import {ButtonWrapper, ButtonsContainer} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";
import {useHistory} from "react-router-dom";
import {ModelTitle} from "../../../common/ModelTitle";
import {useSelector, useDispatch} from "react-redux";
import {SaveModelResultsModal} from "../../Modals/SaveModelResultsModal/SaveModelResultsModal";
import {fetchAdsorbates} from "../../../redux/adsorbatesSlice";
import {fetchAdsorbents} from "../../../redux/adsorbentsSlice";

export const ModelResults = ({responses, modelType}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const colors = [appColors.primary, appColors.red, appColors.green];
  const modelData = useSelector((state) => state.modelData.models);

  const [openModal, setOpenModal] = useState(false);

  const {adsorbates} = useSelector((state) => state.adsorbates);
  const {adsorbents} = useSelector((state) => state.adsorbents);

  useEffect(() => {
    dispatch(fetchAdsorbates());
    dispatch(fetchAdsorbents());
  }, []);

  const components = {
    [MODEL_TYPES.THOMAS]: ThomasResults,
    [MODEL_TYPES.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_TYPES.YOON_NELSON]: YoonNelsonResults,
  };
  const ResultComponent = components[modelType];
  const {loggedIn} = useSelector((state) => state.auth);
  console.log(modelData);

  return (
    <>
      <SaveModelResultsModal
        open={openModal}
        closeModal={() => setOpenModal(false)}
        modelId={modelData[0].dataId}
        adsorbates={adsorbates}
        adsorbents={adsorbents}
      />
      <Row>
        <ModelTitle title={modelType} />
      </Row>
      <ResultComponent responses={responses} colors={colors} />
      <ButtonWrapper>
        {loggedIn && (
          <ButtonsContainer>
            <Button
              size="medium"
              text="Guardar Resultados"
              onClick={() => {
                setOpenModal(true);
              }}
            />
            <Button
              size="medium"
              text="Volver"
              onClick={() => history.goBack()}
            />
          </ButtonsContainer>
        )}
      </ButtonWrapper>
    </>
  );
};
