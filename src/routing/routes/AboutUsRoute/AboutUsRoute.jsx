import React from "react";
import {
  PageContainer,
  ContentFrame,
  Paragraph,
  SmallSubtitle,
  Subtitle,
  Title,
  AuthorsSection,
  BoldText,
  AuthorsTitleContainer,
} from "./AboutUsRouteStyles";
import {Portrait} from "../../../components/Portratit/Portrait";
import authorOne from "../../../resources/images/author_1.jpeg";
import authorTwo from "../../../resources/images/author_2.jpeg";
import authorThree from "../../../resources/images/author_3.jpeg";

export const AboutUsRoute = () => {
  return (
    <PageContainer>
      <ContentFrame>
        <Title>Reactor App</Title>
        <Subtitle>Sobre el proyecto</Subtitle>
        <Paragraph>
          <BoldText>Reactor App</BoldText> es el producto de un trabajo
          profesional de Ing. en informática en colaboración con el LaQuíSiHe
          (Laboratorio de Química de Sistemas Heterogéneos) del IQAI (Instituto
          de Química Aplicado a la Ingeniería) y el Departamento de Gestión.
          Está enmarcado en el Proyecto de Desarrollo Estratégico 032/2020&nbsp;
          <BoldText>
            Metodología para el dimensionamiento de un reactor prototipo para el
            tratamiento de efluentes
          </BoldText>
        </Paragraph>
        <br />
        <SmallSubtitle>Objetivo</SmallSubtitle>
        <Paragraph>
          El objetivo de esta aplicación es brindar una herramienta informática
          para la resolución de problemas que involucran el diseño de reactores
          Adsorbato - Adsorbente de bajo costo apuntando al tratamiento de aguas
          contaminadas.
          <br />
          <br />
        </Paragraph>
        <AuthorsTitleContainer>
          <SmallSubtitle>Autores</SmallSubtitle>
        </AuthorsTitleContainer>
        <AuthorsSection>
          <Portrait
            image={authorOne}
            text="Lucas Lavandeira"
            subtitle="Ing. en Informática
            "
          />
          <Portrait
            image={authorTwo}
            text="Santiago Pinto"
            subtitle="Ing. en Informática
            "
          />
          <Portrait
            image={authorThree}
            text="Matias Reimondo"
            subtitle="Ing. en Informática
            "
          />
        </AuthorsSection>
      </ContentFrame>
    </PageContainer>
  );
};
