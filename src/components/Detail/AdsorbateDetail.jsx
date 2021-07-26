import React, {useState} from "react";
import {FormulaLabel} from "../Card/AdsorbateCard/FormulaLabel";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {spillLimit} from "../../common/formatting/spillLimit";
import {DeleteAdsorbateOrAdsorbentModal} from "../Modals/DeleteAdsorbateOrAdsorbentModal/DeleteAdsorbateOrAdsorbentModal";
import {DetailHeader} from "./DetailHeader";
import {EditButton} from "../List/common/EditButton";
import {adsorbateEditUrlFor} from "../../routing/urls";
import {DeleteButton} from "../List/common/DeleteButton";
import {URLS} from "../../routing/urls";
import {
  getAdsorbateProcessCount,
  deleteAdsorbate,
} from "../../services/adsorbates";
import {ADSORBATE_FIELDS} from "../../common/fields";
import {UNITS} from "../../common/fields";
import {DetailTable, DetailTableRow} from "../DetailTable/DetailTable";
import {DetailTableContainer} from "./Styles";

export const AdsorbateDetail = ({adsorbate}) => {
  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <DetailHeader
        title={capitalizeFirstLetter(adsorbate.nombreIUPAC)}
        id={adsorbate.id}
        buttons={
          <>
            <EditButton url={adsorbateEditUrlFor(adsorbate.id)} />
            <DeleteButton onClick={onDeleteClick} />
          </>
        }
      />

      <DetailTableContainer>
        <DetailTable title="Características">
          <DetailTableRow
            label={ADSORBATE_FIELDS.ION_NAME}
            value={adsorbate.nombreIon}
          />
          <DetailTableRow
            label={ADSORBATE_FIELDS.ION_CHARGE}
            value={adsorbate.cargaIon}
          />
          <DetailTableRow
            label={ADSORBATE_FIELDS.ION_RADIUS}
            value={`${adsorbate.radioIonico} ${UNITS.ION_RADIUS}`}
          />
          <DetailTableRow
            label={ADSORBATE_FIELDS.SPILL_LIMIT}
            value={spillLimit(adsorbate.limiteVertido)}
          />
          <DetailTableRow
            label={ADSORBATE_FIELDS.MOLAR_MASS}
            value={
              adsorbate.masaMolar
                ? `${adsorbate.masaMolar} ${UNITS.MOLAR_MASS}`
                : "-"
            }
          />
        </DetailTable>

        <DetailTable title="Información Adicional">
          <DetailTableRow
            label={ADSORBATE_FIELDS.FORMULA}
            value={
              <FormulaLabel
                formula={adsorbate.formula}
                ionChargeFormula={adsorbate.cargaIonFormula}
              />
            }
          />
        </DetailTable>
      </DetailTableContainer>

      <DeleteAdsorbateOrAdsorbentModal
        open={showModal}
        onClose={() => setShowModal(false)}
        itemToDelete={adsorbate}
        typeOfItemDeleted={"adsorbato"}
        processCountGetter={getAdsorbateProcessCount}
        deleteFunction={deleteAdsorbate}
        successRedirectURL={URLS.ADSORBATES_LIST}
      />
    </>
  );
};
