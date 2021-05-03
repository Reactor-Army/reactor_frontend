import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../../redux/adsorbentsSlice";

export function AdsorbentList() {
  const {adsorbents} = useSelector((state) => state.adsorbents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  return (
    <div style={{width: "300px", height: "300px", background: "red"}}>
      {adsorbents.length}
    </div>
  );
}
