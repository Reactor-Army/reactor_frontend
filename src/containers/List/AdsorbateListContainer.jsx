import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {AdsorbateSearchContainer} from "./Search/AdsorbateSearchContainer";
import {AdsorbateList} from "../../components/List/AdsorbateList/AdsorbateList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";

export function AdsorbateListContainer() {
  const {adsorbates, loading} = useSelector((state) => state.adsorbates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  return (
    <>
      <ListHeader title={"Adsorbatos"} creationUrl={URLS.ADSORBATE_CREATE} />
      <AdsorbateSearchContainer />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </>
  );
}
