import React, {useEffect, useState} from "react";
import {AdsorbateSearchContainer} from "./Search/AdsorbateSearchContainer";
import {AdsorbateList} from "../../components/List/AdsorbateList/AdsorbateList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";
import {getAdsorbates} from "../../services/adsorbates";

export function AdsorbateListContainer() {
  const [loading, setLoading] = useState(false);
  const [adsorbates, setAdsorbates] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const response = await getAdsorbates();
    if (!response.status) {
      setAdsorbates(response);
    }
    setLoading(false);
  }, []);

  return (
    <>
      <ListHeader title={"Adsorbatos"} creationUrl={URLS.ADSORBATE_CREATE} />
      <AdsorbateSearchContainer />
      <AdsorbateList loading={loading} adsorbates={adsorbates} />
    </>
  );
}
