import React, {useEffect} from "react";
import {CreateForm} from "./CreateForm";
import {adsorbateFields} from "./fields";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdsorbate} from "../../redux/adsorbateSlice";

export const AdsorbateEditForm = ({id}) => {
  const dispatch = useDispatch();
  const adsorbate = useSelector((store) => store.adsorbate.adsorbate);
  useEffect(() => {
    if (!adsorbate) {
      dispatch(fetchAdsorbate(id));
    }
  }, []);

  const onClick = async () => {
    console.log("edita2");
  };

  return (
    <CreateForm
      onFormSubmit={onClick}
      items={adsorbateFields}
      initial={adsorbate}
    />
  );
};
