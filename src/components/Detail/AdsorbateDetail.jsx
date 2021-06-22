import React, {useState} from "react";
import {SectionHeader} from "./SectionHeader";
import {Label} from "./Label";
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
      <SectionHeader>Características</SectionHeader>
      <Label label={"Nombre común"} value={adsorbate.nombreIon} />
      <Label label={"Carga iónica"} value={adsorbate.cargaIon} />
      <Label label={"Radio iónico"} value={`${adsorbate.radioIonico} Å`} />
      <Label
        label={"Límite de vertido (Ley 24051)"}
        value={spillLimit(adsorbate.limiteVertido)}
      />
      <Label
        label={"Masa molar"}
        value={adsorbate.masaMolar ? `${adsorbate.masaMolar} g/mol` : "-"}
      />

      <SectionHeader>Fórmula</SectionHeader>
      <FormulaLabel
        formula={adsorbate.formula}
        ionChargeFormula={adsorbate.cargaIonFormula}
      />
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
