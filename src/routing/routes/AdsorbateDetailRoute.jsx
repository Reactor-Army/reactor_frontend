import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";
import {AdsorbateDetail} from "../../components/Detail/AdsorbateDetail";
import {Redirect} from "react-router-dom";
import {URLS} from "../urls";
import {errorCodes} from "../../utils/errorStatusCodes";

export const AdsorbateDetailRoute = () => {
  let {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbate(id));
  }, []);

  const adsorbate = useSelector((store) => store.adsorbate.adsorbate);
  if (adsorbate === null) {
    return <CircularProgress />;
  }
  if (adsorbate && errorCodes.includes(adsorbate.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return <AdsorbateDetail adsorbate={adsorbate} />;
};
