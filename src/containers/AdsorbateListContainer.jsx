import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../redux/adsorbatesSlice";
import {AdsorbateList} from "../components/AdsorbateList/AdsorbateList";
import {PageTitle} from "../common/PageTitle";
import Container from "@material-ui/core/Container";
import {AdsorbateSearchContainer} from "./AdsorbateSearchContainer";

export function AdsorbateListContainer() {
  const loading = useSelector((state) => state.loading);
  const {adsorbates} = useSelector((state) => state.adsorbates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  return (
    <Container>
      <PageTitle title={"Adsorbatos"} />
      <AdsorbateSearchContainer />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </Container>
  );
}
