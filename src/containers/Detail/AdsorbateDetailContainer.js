import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";

export const AdsorbateDetailContainer = ({adsorbateId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbate(adsorbateId));
  }, []);

  const adsorbate = useSelector((store) => store.adsorbate.adsorbate);
  if (adsorbate === null) {
    return <CircularProgress />;
  }
  return <p>{JSON.stringify(adsorbate)}</p>;
};
