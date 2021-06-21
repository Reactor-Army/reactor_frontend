import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {SectionHeader} from "./SectionHeader";
import {Label} from "./Label";
import {FormulaLabel} from "../Card/AdsorbateCard/FormulaLabel";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {spillLimit} from "../../common/formatting/spillLimit";
import {DeleteButton} from "../List/common/DeleteButton";
import {DeleteAdsorbateModal} from "../Modals/DeleteAdsorbateModal/DeleteAdsorbateModal";
//import {useHistory} from "react-router-dom";
//import {URLS} from "../../routing/urls";

export const AdsorbateDetail = ({adsorbate}) => {
  //const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <PageTitle title={capitalizeFirstLetter(adsorbate.nombreIUPAC)} />
      <DeleteButton onClick={onDeleteClick} />
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
      <DeleteAdsorbateModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
