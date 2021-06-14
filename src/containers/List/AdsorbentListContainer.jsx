import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../../redux/adsorbentsSlice";
import {AdsorbentSearchContainer} from "./Search/AdsorbentSearchContainer";
import {AdsorbentList} from "../../components/List/AdsorbentList/AdsorbentList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";

export function AdsorbentListContainer() {
  const {adsorbents, loading} = useSelector((state) => state.adsorbents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  return (
    <>
      <ListHeader title={"Adsorbentes"} creationUrl={URLS.ADSORBENT_CREATE} />
      <AdsorbentSearchContainer />
      <AdsorbentList loading={loading} adsorbents={adsorbents} />
    </>
  );
}
