import React from "react";
import {PageContainer} from "../AboutUsRoute/AboutUsRouteStyles";
import {
  ModelPickCard,
  PickCardLeftSection,
  ContentFrame,
  Title,
  Content,
} from "./ModelsRouteStyles";
import {useHistory} from "react-router";
import {URLS} from "../../urls";

export const ModelsRoute = () => {
  const history = useHistory();
  return (
    <PageContainer>
      <ContentFrame>
        <ModelPickCard
          onClick={() => {
            history.push(URLS.THOMAS);
          }}>
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
        </ModelPickCard>
        <ModelPickCard
          onClick={() => {
            history.push(URLS.ADAMS_BOHART);
          }}>
          <PickCardLeftSection>
            <Title>Modelo de Adams-Bohart</Title>
            <Content>
              El modelo Adams-Bohart supone que la velocidad de adsorción es
              proporcional a la capacidad residual del sólido (cantidad de
              adsorbente no saturado) y se aplica para describir la parte
              inicial de la curva de ruptura
            </Content>
          </PickCardLeftSection>
        </ModelPickCard>
        <ModelPickCard
          onClick={() => {
            history.push(URLS.YOON_NELSON);
          }}>
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
        </ModelPickCard>
      </ContentFrame>
    </PageContainer>
  );
};
