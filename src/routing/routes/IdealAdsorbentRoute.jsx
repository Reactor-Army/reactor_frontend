import React, {useEffect} from "react";
import {IdealAdsorbentSearchContainer} from "../../containers/List/Search/IdealAdsorbentSearchContainer";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {IdealAdsorbentList} from "../../components/IdealAdsorbentList/IdealAdsorbentList";
import {
  TitleContainer,
  IdealAdsorbentListContainer,
} from "../../containers/List/Styles";
import {resetIdealAdsorbents} from "../../redux/idealAdsorbentsSlice";

export const IdealAdsorbentRoute = () => {
  const loading = useSelector((state) => state.loading);
  const {idealAdsorbents} = useSelector((state) => state.idealAdsorbents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(resetIdealAdsorbents());
  }, []);

  return (
    <>
      <TitleContainer>
        <Typography variant="h5">¿Qué adsorbatos querés remover?</Typography>
      </TitleContainer>

      <IdealAdsorbentSearchContainer />
      <IdealAdsorbentListContainer>
        <IdealAdsorbentList
          loading={loading}
          idealAdsorbents={idealAdsorbents}
        />
      </IdealAdsorbentListContainer>
    </>
  );
};
