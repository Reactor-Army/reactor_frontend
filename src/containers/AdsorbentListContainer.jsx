import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../redux/adsorbentsSlice";
import {AdsorbentList} from "../components/AdsorbentList/AdsorbentList";
import {PageTitle} from "../common/PageTitle";
import Container from "@material-ui/core/Container";

export function AdsorbentListContainer() {
  const loading = useSelector((state) => state.loading);
  const {adsorbents} = useSelector((state) => state.adsorbents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  return (
    <Container>
      <PageTitle title={"Adsorbentes"} />
      <AdsorbentList loading={loading} adsorbents={adsorbents} />
    </Container>
  );
}
