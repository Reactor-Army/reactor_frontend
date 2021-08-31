import {Button} from "../Button/Button";
import React from "react";
import {
  InfoContainer,
  ButtonsContainer,
  Ecuation,
  Info,
} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";
import thomas from "../../resources/images/thomas.png";
import {Kth} from "./Variables/Kth";
import {Qo} from "./Variables/Qo";
import {Vef} from "./Variables/Vef";
import {F} from "./Variables/F";
import {Co} from "./Variables/Co";
import {C} from "./Variables/C";
import {W} from "./Variables/W";

export const InfoThomasModal = ({closeModal, openModal}) => {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <InfoContainer>
        <Info>
          El modelo de Thomas es uno de los más generales y utilizados para
          describir el comportamiento del proceso de adsorción en columnas de
          lecho fijo. Se usa para conocer la máxima capacidad de adsorción de un
          adsorbente y obtener el rendimiento teórico de la columna
        </Info>
        <Ecuation src={thomas} alt="Ecuacion Thomas"></Ecuation>
        <Info>Donde:</Info>
        <Kth></Kth>
        <Qo></Qo>
        <Vef></Vef>
        <F></F>
        <Co></Co>
        <C></C>
        <W></W>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={closeModal} />
        </ButtonsContainer>
      </InfoContainer>
    </Modal>
  );
};
