import React, {useEffect, useState} from "react";
import {AdsorbateSearchContainer} from "../../containers/List/Search/AdsorbateSearchContainer";
import {AdsorbateList} from "../../components/List/AdsorbateList/AdsorbateList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../urls";
import {getAdsorbates} from "../../services/adsorbates";
import {useSelector} from "react-redux";

export const AdsorbatesRoute = () => {
  const [loading, setLoading] = useState(false);
  const [adsorbates, setAdsorbates] = useState(null);
  const storedAdsorbates = useSelector((state) => state.adsorbates.adsorbates);

  useEffect(async () => {
    setLoading(true);
    const response = await getAdsorbates();
    if (!response.status) {
      setAdsorbates(response);
    }
    setLoading(false);
  }, []);

  useEffect(async () => {
    setAdsorbates(storedAdsorbates);
  }, [storedAdsorbates]);

  return (
    <>
      <ListHeader title={"Adsorbatos"} creationUrl={URLS.ADSORBATE_CREATE} />
      <AdsorbateSearchContainer />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </>
  );
};
