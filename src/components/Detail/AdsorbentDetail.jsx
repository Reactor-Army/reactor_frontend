import React, {useState} from "react";
import {capitalizeFirstLetter} from "../../utils/capitalize";
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
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";
import {UNITS} from "../../common/fields";

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

      <DetailTable title="Características">
        <DetailTableRow
          label={ADSORBENT_FIELDS.PARTICLE_SIZE}
          value={adsorbent.particulaT}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.SBET}
          value={adsorbent.sBet}
          units={UNITS.SBET}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.VBET}
          value={adsorbent.vBet}
          units={UNITS.VBET}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.PH}
          value={adsorbent.pHCargaCero}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.IMPURITIES}
          value={adsorbent.impurezas}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.SOURCE}
          value={adsorbent.origenMuestra}
        />
        <DetailTableRow
          label={ADSORBATE_FIELDS.FORMULA}
          value={adsorbent.formula}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.SPECIES_NAME}
          value={adsorbent.nombreEspecie}
        />
        <DetailTableRow
          label={ADSORBENT_FIELDS.NOTES}
          value={adsorbent.observaciones}
        />
      </DetailTable>
    </>
  );
};
