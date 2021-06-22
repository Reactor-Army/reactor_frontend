import React, {useEffect} from "react";
import {CreateForm} from "./CreateForm";
import {adsorbentFields} from "./fields";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdsorbent} from "../../redux/adsorbentSlice";
import {editAdsorbent} from "../../services/adsorbents";
import {adsorbentDetailUrlFor} from "../../routing/urls";

export const AdsorbentEditForm = ({id}) => {
  const dispatch = useDispatch();
  const adsorbent = useSelector((store) => store.adsorbent.adsorbent);
  useEffect(() => {
    if (!adsorbent) {
      dispatch(fetchAdsorbent(id));
    }
  }, []);

  const onClick = async (fields) => {
    try {
      return await editAdsorbent(id, fields);
    } catch (e) {
      return e.response.data;
    }
  };

  return (
    <CreateForm
      onFormSubmit={onClick}
      items={adsorbentFields}
      initial={adsorbent}
      url={adsorbentDetailUrlFor(id)}
      buttonLabel={"Modificar"}
    />
  );
};
