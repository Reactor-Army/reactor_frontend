import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import {IdealAdsorbentSearchContainer} from "./Search/IdealAdsorbentSearchContainer";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {IdealAdsorbentList} from "../../components/IdealAdsorbentList/IdealAdsorbentList";
import {TittleContainer} from "./Styles";
import {resetIdealAdsorbents} from "../../redux/idealAdsorbentsSlice";

export function IdealAdsorbentContainer() {
  const loading = useSelector((state) => state.loading);
  const {idealAdsorbents} = useSelector((state) => state.idealAdsorbents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(resetIdealAdsorbents());
  }, []);

  return (
    <Container>
      <TittleContainer>
        <Typography variant="h5">¿Que adsorbatos queres remover?</Typography>
      </TittleContainer>

      <IdealAdsorbentSearchContainer />

      <IdealAdsorbentList loading={loading} idealAdsorbents={idealAdsorbents} />
    </Container>
  );
}
