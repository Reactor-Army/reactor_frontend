import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {AdsorbateList} from "../../components/AdsorbateList/AdsorbateList";
import {PageTitle} from "../../common/PageTitle";
import {AdsorbateSearchContainer} from "./Search/AdsorbateSearchContainer";

export function AdsorbateListContainer() {
  const {adsorbates, loading} = useSelector((state) => state.adsorbates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  return (
    <>
      <PageTitle title={"Adsorbatos"} />
      <AdsorbateSearchContainer />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </>
  );
}
