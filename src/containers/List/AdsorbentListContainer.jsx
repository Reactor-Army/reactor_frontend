import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../../redux/adsorbentsSlice";
import {PageTitle} from "../../common/PageTitle";
import {appFontFamily} from "../../common/styles";
import {AdsorbentSearchContainer} from "./Search/AdsorbentSearchContainer";
import {AdsorbentList} from "../../components/List/AdsorbentList/AdsorbentList";

export function AdsorbentListContainer() {
  const {adsorbents, loading} = useSelector((state) => state.adsorbents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  return (
    <>
      <PageTitle
        title={"Adsorbentes"}
        style={{fontFamily: appFontFamily.card}}
      />
      <AdsorbentSearchContainer />
      <AdsorbentList loading={loading} adsorbents={adsorbents} />
    </>
  );
}
