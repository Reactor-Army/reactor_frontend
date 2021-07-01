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
import {ADSORBATE_FIELDS, ADSORBENT_FIELDS} from "../../common/fields";

export const AdsorbentDetail = ({adsorbent}) => {
  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <DeleteAdsorbateOrAdsorbentModal
        open={showModal}
        onClose={() => setShowModal(false)}
        itemToDelete={adsorbent}
        typeOfItemDeleted={"adsorbente"}
        processCountGetter={getAdsorbentProcessCount}
        deleteFunction={deleteAdsorbent}
        successRedirectURL={URLS.ADSORBENTS_LIST}
      />
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
      <Label
        label={ADSORBENT_FIELDS.PARTICLE_SIZE}
        value={adsorbent.particulaT}
      />
      <SBetLabel value={adsorbent.sBet} />
      <VBetLabel value={adsorbent.vBet} />
      <Label label={ADSORBENT_FIELDS.PH} value={adsorbent.pHCargaCero} />
      <Label label={ADSORBENT_FIELDS.IMPURITIES} value={adsorbent.impurezas} />
      <Label label={ADSORBENT_FIELDS.SOURCE} value={adsorbent.origenMuestra} />
      <Label label={ADSORBATE_FIELDS.FORMULA} value={adsorbent.formula} />
      <Label
        label={ADSORBENT_FIELDS.SPECIES_NAME}
        value={adsorbent.nombreEspecie}
      />
    </>
  );
};
