import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React, {useState, useEffect} from "react";
import {appColors} from "../../../common/styles";
import {ButtonWrapper, ButtonsContainer} from "../Models/ModelsStyles";
import {useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {SaveModelResultsModal} from "../../Modals/SaveModelResultsModal/SaveModelResultsModal";
import {fetchAdsorbates} from "../../../redux/adsorbatesSlice";
import {fetchAdsorbents} from "../../../redux/adsorbentsSlice";
import {MODEL_ALIAS} from "../../../common/constants";
import {Button} from "../../Button/Button";

export const ModelResults = ({responses, modelType}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();

  const colors = [appColors.primary, appColors.red, appColors.green];

  const [openModal, setOpenModal] = useState(false);

  const {adsorbates} = useSelector((state) => state.adsorbates);
  const {adsorbents} = useSelector((state) => state.adsorbents);

  useEffect(() => {
    dispatch(fetchAdsorbates());
    dispatch(fetchAdsorbents());
  }, []);

  const components = {
    [MODEL_ALIAS.THOMAS]: ThomasResults,
    [MODEL_ALIAS.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_ALIAS.YOON_NELSON]: YoonNelsonResults,
  };
  const ResultComponent = components[modelType];
  const {loggedIn} = useSelector((state) => state.auth);

  return (
    <>
      <SaveModelResultsModal
        open={openModal}
        closeModal={() => setOpenModal(false)}
        modelId={responses[0].dataId}
        adsorbates={adsorbates}
        adsorbents={adsorbents}
      />
      <ResultComponent responses={responses} colors={colors} />
      <ButtonWrapper>
        {loggedIn && (
          <ButtonsContainer>
            {!id && (
              <Button
                size="medium"
                text="Guardar Resultados"
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            )}
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
