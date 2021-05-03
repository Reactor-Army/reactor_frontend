import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../redux/adsorbatesSlice";
import {AdsorbateList} from "../components/AdsorbateList/AdsorbateList";
import {PageTitle} from "../common/PageTitle";
import {AddAdsorbateButton} from "../components/AdsorbateList/AddAdsorbateButton";
import {PageContent} from "../components/PageContent/PageContent";

export function AdsorbateListContainer() {
  const loading = useSelector((state) => state.loading);
  const {adsorbates} = useSelector((state) => state.adsorbates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  return (
    <PageContent>
      <PageTitle title={"Adsorbatos"} />
      <AddAdsorbateButton />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </PageContent>
  );
}
