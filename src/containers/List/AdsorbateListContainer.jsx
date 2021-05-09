import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {AdsorbateList} from "../../components/AdsorbateList/AdsorbateList";
import {PageTitle} from "../../common/PageTitle";
import Container from "@material-ui/core/Container";
import {AdsorbateSearchContainer} from "./Search/AdsorbateSearchContainer";

export function AdsorbateListContainer() {
  const {adsorbates, loading} = useSelector((state) => state.adsorbates);
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
