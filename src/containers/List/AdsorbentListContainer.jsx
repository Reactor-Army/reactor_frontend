import React, {useEffect, useState} from "react";
import {AdsorbentSearchContainer} from "./Search/AdsorbentSearchContainer";
import {AdsorbentList} from "../../components/List/AdsorbentList/AdsorbentList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";
import {getAdsorbents} from "../../services/adsorbents";

export function AdsorbentListContainer() {
  const [loading, setLoading] = useState(false);
  const [adsorbents, setAdsorbents] = useState(null);
  useEffect(async () => {
    setLoading(true);
    const response = await getAdsorbents();
    if (!response.status) {
      setAdsorbents(response);
    }
    setLoading(false);
  }, []);

  return (
    <>
      <ListHeader title={"Adsorbentes"} creationUrl={URLS.ADSORBENT_CREATE} />
      <AdsorbentSearchContainer />
      <AdsorbentList loading={loading} adsorbents={adsorbents} />
    </>
  );
}
