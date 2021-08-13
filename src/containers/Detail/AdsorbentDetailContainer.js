import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbent} from "../../redux/adsorbentSlice";
import {AdsorbentDetail} from "../../components/Detail/AdsorbentDetail";
import {Redirect} from "react-router-dom";
import {URLS} from "../../routing/urls";

export const AdsorbentDetailContainer = ({adsorbentId}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsorbent(adsorbentId));
  }, []);

  const adsorbent = useSelector((store) => store.adsorbent.adsorbent);
  if (adsorbent === null) {
    return <CircularProgress />;
  }
  if (adsorbent === 400 || adsorbent === 404) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return <AdsorbentDetail adsorbent={adsorbent} />;
};
