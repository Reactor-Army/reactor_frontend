import React, {useEffect} from "react";
import {PageTitle} from "../../common/PageTitle";
import Container from "@material-ui/core/Container";
import {appFontFamily} from "../../common/styles";
import {WizardContainer} from "./Styles";
import {IdealAdsorbentSearchContainer} from "./Search/IdealAdsorbentSearchContainer";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {IdealAdsorbentList} from "../../components/IdealAdsorbentList/IdealAdsorbentList";

export function IdealAdsorbentContainer() {
  const loading = useSelector((state) => state.loading);
  const {idealAdsorbents} = useSelector((state) => state.idealAdsorbents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsorbatesWithIupacNotation());
  }, []);

  return (
    <Container>
      <PageTitle
        title={"Adsorbente Ideal"}
        style={{fontFamily: appFontFamily.card}}
      />

      <WizardContainer>
        <Typography>¿Que adsorbato queres remover?</Typography>
      </WizardContainer>
      <IdealAdsorbentSearchContainer />
      <IdealAdsorbentList loading={loading} idealAdsorbents={idealAdsorbents} />
    </Container>
  );
}
