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
import adamsBohart from "../../resources/images/adams-bohart.png";
import {Variable} from "./Variables/Variable";

export const InfoAdamsBohartModal = ({closeModal, openModal}) => {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <InfoContainer>
        <InfoTitle>Sobre el Modelo de Adams-Bohart</InfoTitle>
        <Info>
          El modelo Adams-Bohart supone que la velocidad de adsorción es
          proporcional a la capacidad residual del sólido (cantidad de
          adsorbente no saturado) y se aplica para describir la parte inicial de
          la curva de ruptura
        </Info>
        <Ecuation src={adamsBohart} alt="Ecuacion Adams-Bohart" />
        <Info>Donde:</Info>
        <VariableExplanationWrapper>
          <Variable
            letter="K"
            subletters="ab"
            info="Es el coeficiente de transferencia de masa"
          />
          <Variable
            letter="N"
            subletters="0"
            info="Es la la capacidad máxima de adsorción"
          />
          <Variable
            letter="V"
            subletters="ef"
            info="Es el volumen del efluente"
          />
          <Variable letter="F" info="Es el caudal volumétrico de operación" />
          <Variable
            letter="U"
            subletters="0"
            info="Es la velocidad lineal del líquido"
          />
          <Variable
            letter="C"
            subletters="0"
            info="Es la concentración de salida"
          />
          <Variable letter="C" info="Es la concentración de salida" />
          <Variable letter="Z" info="Es la  altura del lecho en el reactor " />
        </VariableExplanationWrapper>
        <ButtonInfoContainer>
          <Button text="Cerrar" onClick={closeModal} />
        </ButtonInfoContainer>
      </InfoContainer>
    </Modal>
  );
};
