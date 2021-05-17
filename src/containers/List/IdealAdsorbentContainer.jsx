import React, {useEffect} from "react";
import {PageTitle} from "../../common/PageTitle";
import Container from "@material-ui/core/Container";
import {appFontFamily} from "../../common/styles";
import {WizardContainer} from "./Styles";
import {IdealAdsorbentSearchContainer} from "./Search/IdealAdsorbentSearchContainer";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";

export function IdealAdsorbentContainer() {
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
    </Container>
  );
}
