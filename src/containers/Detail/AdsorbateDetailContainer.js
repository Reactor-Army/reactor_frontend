import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";
import {AdsorbateDetail} from "../../components/Detail/AdsorbateDetail";
import {Redirect} from "react-router-dom";
import {URLS} from "../../routing/urls";
import {errorCodes} from "../../utils/errorStatusCodes";

export const AdsorbateDetailContainer = ({adsorbateId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbate(adsorbateId));
  }, []);

  const adsorbate = useSelector((store) => store.adsorbate.adsorbate);
  if (adsorbate === null) {
    return <CircularProgress />;
  }
  if (errorCodes.has(adsorbate)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return <AdsorbateDetail adsorbate={adsorbate} />;
};
