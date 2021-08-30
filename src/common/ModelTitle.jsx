import React, {useState} from "react";
import {Row, Icon} from "../common/styles";
import info_icon from "../resources/images/info_icon.png";
import {InfoThomasModal} from "../components/ChemicalModels/InfoThomasModal";

export function ModelTitle({title}) {
  const [openModal, setOpenModal] = useState(false);

  const imageClick = () => {
    setOpenModal(true);
    console.log(openModal);
  };
  return (
    <>
      <Row>
        <>{title}</>
        <Icon src={info_icon} alt="Logo Fiuba" onClick={() => imageClick()} />
      </Row>
      <InfoThomasModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
        infoText={"HOLAAAA"}
      />
    </>
  );
}
