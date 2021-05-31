import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {PageTitle} from "../../common/PageTitle";
import {AdsorbateSearchContainer} from "./Search/AdsorbateSearchContainer";
import {AdsorbateList} from "../../components/List/AdsorbateList/AdsorbateList";

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
