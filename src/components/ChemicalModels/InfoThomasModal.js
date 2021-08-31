import {Button} from "../Button/Button";
import React from "react";
import {
  InfoContainer,
  Ecuation,
  Info,
  InfoTitle,
  ButtonInfoContainer,
} from "./InfoStyles";
import {Modal} from "../Modals/Modal";
import thomas from "../../resources/images/thomas.png";
import {Variable} from "./Variables/Variable";

export const InfoThomasModal = ({closeModal, openModal}) => {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <InfoContainer>
        <InfoTitle>Sobre el Modelo de Thomas</InfoTitle>
        <Info>
          El modelo de Thomas es uno de los más generales y utilizados para
          describir el comportamiento del proceso de adsorción en columnas de
          lecho fijo. Se usa para conocer la máxima capacidad de adsorción de un
          adsorbente y obtener el rendimiento teórico de la columna
        </Info>
        <Ecuation src={thomas} alt="Ecuacion Thomas" />
        <Info>Donde:</Info>
        <Variable
          letter="K"
          subletters="th"
          info="Es la constante de velocidad de Thomas"
        />
        <Variable
          letter="q"
          subletters="o"
          info="Es la máxima concentración de soluto en la fase solida"
        />
        <Variable
          letter="V"
          subletters="ef"
          info="Es el volumen del efluente"
        />
        <Variable letter="F" info="Es el caudal volumétrico de operación" />
        <Variable
          letter="C"
          subletters="o"
          info="Es la concentración de metal en la alimentación"
        />
        <Variable letter="C" info="Es la concentración de salida" />
        <Variable
          letter="W"
          info="Es la cantidad de sorbente en el interior del reactor"
        />
      </InfoContainer>
      <ButtonInfoContainer>
        <Button text="Cerrar" onClick={closeModal} />
      </ButtonInfoContainer>
    </Modal>
  );
};
