import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchAdsorbent} from "../../redux/adsorbentSlice";
import {AdsorbentDetail} from "../../components/Detail/AdsorbentDetail";
import {Redirect} from "react-router-dom";
import {URLS} from "../urls";
import {errorCodes} from "../../utils/errorStatusCodes";
import {useParams} from "react-router-dom";

export const AdsorbentDetailRoute = () => {
  let {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsorbent(id));
  }, []);

  const adsorbent = useSelector((store) => store.adsorbent.adsorbent);
  if (adsorbent === null) {
    return <CircularProgress />;
  }
  if (adsorbent && errorCodes.includes(adsorbent.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return <AdsorbentDetail adsorbent={adsorbent} />;
};
