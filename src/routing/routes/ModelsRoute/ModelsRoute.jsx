import React from "react";
import {PageContainer} from "../AboutUsRoute/AboutUsRouteStyles";
import {
  ModelPickCard,
  PickCardLeftSection,
  PickCardRightSection,
  EquationImg,
  ContentFrame,
  Title,
  Content,
} from "./ModelsRouteStyles";
import plot from "../../../resources/images/plot.png";

export const ModelsRoute = () => {
  return (
    <PageContainer>
      <ContentFrame>
        <ModelPickCard>
          <PickCardLeftSection>
            <Title>Modelo de Thomas</Title>
            <Content>
              El modelo de Thomas es uno de los más generales y utilizados para
              describir el comportamiento del proceso de adsorción en columnas
              de lecho fijo. Se usa para conocer la máxima capacidad de
              adsorción de un adsorbente y obtener el rendimiento teórico de la
              columna
            </Content>
          </PickCardLeftSection>
          <PickCardRightSection>
            <EquationImg src={plot} alt="Thomas model" />
          </PickCardRightSection>
        </ModelPickCard>
        <ModelPickCard>
          <PickCardLeftSection>
            <Title>Modelo de Adams-Bohart</Title>
            <Content>
              El modelo Adams-Bohart supone que la velocidad de adsorción es
              proporcional a la capacidad residual del sólido (cantidad de
              adsorbente no saturado) y se aplica para describir la parte
              inicial de la curva de ruptura
            </Content>
          </PickCardLeftSection>
          <PickCardRightSection>
            <EquationImg src={plot} alt="Adams-Bohart model" />
          </PickCardRightSection>
        </ModelPickCard>
        <ModelPickCard>
          <PickCardLeftSection>
            <Title>Modelo de Yoon-Nelson</Title>
            <Content>
              El modelo de Yoon-Nelson supone que la probabilidad de adsorción
              de cada molécula de adsorbato disminuye a una velocidad
              proporcional a la cantidad de moléculas adsorbidas. Este es un
              modelo más simplificado porque no requiere datos sobre la
              característica del adsorbato, el tipo de adsorbente y las
              propiedades físicas del lecho de adsorción
            </Content>
          </PickCardLeftSection>
          <PickCardRightSection>
            <EquationImg src={plot} alt="Yoon-Nelson model" />
          </PickCardRightSection>
        </ModelPickCard>
      </ContentFrame>
    </PageContainer>
  );
};
