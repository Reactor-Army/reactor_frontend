import {Button} from "../Button/Button";
import React from "react";
import {
  BodyContainer,
  ButtonsContainer,
  Ecuation,
  Info,
} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";
import thomas from "../../resources/images/thomas.png";

export const InfoThomasModal = ({closeModal, openModal}) => {
  console.log(openModal);
  return (
    <Modal open={openModal} onClose={closeModal}>
      <BodyContainer>
        <Info>
          El modelo de Thomas (Thomas, 1944) es uno de los más generales y
          utilizados para describir el comportamiento del proceso de adsorción
          en columnas de lecho fijo. Se basa en el supuesto de que el
          comportamiento de la adsorción sigue la isoterma de Langmuir, la
          velocidad de reacción obedece una cinética de segundo orden, la
          dispersión axial y radial es insignificante y la difusión
          intraparticular y la resistencia externa durante los procesos de
          transferencia de masa se consideran despreciables (Borba et al., 2008,
          Acheampong et al., 2013, Saad et al., 2015). Se emplea para obtener la
          máxima capacidad de adsorción del adsorbente y tiene la forma definida
          por la siguiente ecuación
        </Info>
        <Ecuation src={thomas} alt="Ecuacion Thomas"></Ecuation>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={closeModal} />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
