import {useDispatch} from "react-redux"; //, useSelector
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../../redux/adsorbentsSlice";

import {AdsorbentCard} from "../../components/AdsorbentCard/AdsorbentCard";
import {appColors} from "../../common/styles";

export function AdsorbentList({loading, adsorbates}) {
  //const {adsorbents} = useSelector((state) => state.adsorbents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  console.log(loading);
  console.log(adsorbates);
  return (
    <>
      <AdsorbentCard
        backgroundColor={appColors.adsorbentCard}
        header={"Dolomita"}
        particleSize={"53-74 µm"}
        sBet={"1,83"}
        vBet={"0,0003"}
        ph={"4,43"}
      />
    </>
  );
}
