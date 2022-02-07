import React, {useEffect, useState} from "react";
import {AdsorbentSearchContainer} from "../../containers/List/Search/AdsorbentSearchContainer";
import {AdsorbentList} from "../../components/List/AdsorbentList/AdsorbentList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";
import {getAdsorbents} from "../../services/adsorbents";
import {useSelector} from "react-redux";

export const AdsorbentsRoute = () => {
  const [loading, setLoading] = useState(false);
  const [adsorbents, setAdsorbents] = useState(null);
  const storedAdsorbents = useSelector((state) => state.adsorbents.adsorbents);

  useEffect(async () => {
    setLoading(true);
    const response = await getAdsorbents();
    if (!response.status) {
      setAdsorbents(response);
    }
    setLoading(false);
  }, []);

  useEffect(async () => {
    setAdsorbents(storedAdsorbents);
  }, [storedAdsorbents]);

  return (
    <>
      <ListHeader title={"Adsorbentes"} creationUrl={URLS.ADSORBENT_CREATE} />
      <AdsorbentSearchContainer />
      <AdsorbentList loading={loading} adsorbents={adsorbents} />
    </>
  );
};
