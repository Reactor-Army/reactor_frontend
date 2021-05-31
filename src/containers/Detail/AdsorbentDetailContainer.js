import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbent} from "../../redux/adsorbentSlice";
import {AdsorbentDetail} from "../../components/Detail/AdsorbentDetail";

export const AdsorbentDetailContainer = ({adsorbentId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbent(adsorbentId));
  }, []);

  const adsorbent = useSelector((store) => store.adsorbent.adsorbent);
  if (adsorbent === null) {
    return <CircularProgress />;
  }
  return <AdsorbentDetail adsorbent={adsorbent} />;
};
