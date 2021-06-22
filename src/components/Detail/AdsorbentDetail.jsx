import React, {useState} from "react";
import {SectionHeader} from "./SectionHeader";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {Label} from "./Label";
import {SBetLabel} from "./SBetLabel";
import {VBetLabel} from "./VBetLabel";
import {DetailHeader} from "./DetailHeader";
import {adsorbentEditUrlFor} from "../../routing/urls";
import {EditButton} from "../List/common/EditButton";
import {DeleteAdsorbateOrAdsorbentModal} from "../Modals/DeleteAdsorbateOrAdsorbentModal/DeleteAdsorbateOrAdsorbentModal";
import {DeleteButton} from "../List/common/DeleteButton";
import {URLS} from "../../routing/urls";
import {
  getAdsorbentProcessCount,
  deleteAdsorbent,
} from "../../services/adsorbents";

export const AdsorbentDetail = ({adsorbent}) => {
  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <DetailHeader
        title={capitalizeFirstLetter(adsorbent.nombre)}
        buttons={
          <>
            <EditButton url={adsorbentEditUrlFor(adsorbent.id)} />
            <DeleteButton onClick={onDeleteClick} />
          </>
        }
      />
      <SectionHeader>Características</SectionHeader>
      <Label label={"Tamaño de partícula"} value={adsorbent.particulaT} />
      <SBetLabel value={adsorbent.sBet} />
      <VBetLabel value={adsorbent.vBet} />
      <Label label={"pH (carga cero)"} value={adsorbent.pHCargaCero} />
      <Label label={"Impurezas"} value={adsorbent.impurezas} />
      <Label label={"Origen de la muestra"} value={adsorbent.origenMuestra} />
      <Label label={"Fórmula"} value={adsorbent.formula} />
      <Label label={"Nombre de la especie"} value={adsorbent.nombreEspecie} />
      <DeleteAdsorbateOrAdsorbentModal
        open={showModal}
        onClose={() => setShowModal(false)}
        itemToDelete={adsorbent}
        typeOfItemDeleted={"adsorbente"}
        processCountGetter={getAdsorbentProcessCount}
        deleteFunction={deleteAdsorbent}
        successRedirectURL={URLS.ADSORBENTS_LIST}
      />
    </>
  );
};
