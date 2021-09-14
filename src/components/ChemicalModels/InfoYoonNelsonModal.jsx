import {Button} from "../Button/Button";
import React from "react";
import {
  InfoContainer,
  Ecuation,
  Info,
  InfoTitle,
  ButtonInfoContainer,
  VariableExplanationWrapper,
} from "./InfoStyles";
import {Modal} from "../Modals/Modal";
import yoonNelson from "../../resources/images/yoon-nelson.png";
import {Variable} from "./Variables/Variable";

export const InfoYoonNelsonModal = ({closeModal, openModal}) => {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <InfoContainer>
        <InfoTitle>Sobre el Modelo de Yoon-Nelson</InfoTitle>
        <Info>
          El modelo de Yoon-Nelson supone que la probabilidad de adsorción de
          cada molécula de adsorbato disminuye a una velocidad proporcional a la
          cantidad de moléculas adsorbidas. Este es un modelo más simplificado
          porque no requiere datos sobre la característica del adsorbato, el
          tipo de adsorbente y las propiedades físicas del lecho de adsorción
        </Info>
        <Ecuation src={yoonNelson} alt="Ecuacion Yoon-Nelson" />
        <Info>Donde:</Info>
        <VariableExplanationWrapper>
          <Variable
            letter="K"
            subletters="yn"
            info="Es la constante de velocidad de Yoon-Nelson"
          />
          <Variable
            letter="𝜏"
            info="Es el tiempo requerido para retener el 50% de la C₀"
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
        </VariableExplanationWrapper>
        <ButtonInfoContainer>
          <Button text="Cerrar" onClick={closeModal} />
        </ButtonInfoContainer>
      </InfoContainer>
    </Modal>
  );
};
