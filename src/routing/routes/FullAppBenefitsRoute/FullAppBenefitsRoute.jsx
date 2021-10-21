import React from "react";
import {
  PageContainer,
  ContentFrame,
  Paragraph,
  SmallSubtitle,
  Title,
} from "../AboutUsRoute/AboutUsRouteStyles";

export const FullAppBenefitsRoute = () => {
  return (
    <PageContainer>
      <ContentFrame>
        <Title>Aplicación completa</Title>

        <Paragraph>
          Si no contás con una cuenta para iniciar sesión, quiere decir que
          estas haciendo uso de una versión limitada de la aplicación. Esto
          quiere decir que los datos que se están mostrando son solo una parte
          de un conjunto más grande de información que maneja el laboratorio.
          Como usuario invitado no es posible acceder a las funcionalidades de
          calculo del volumen efectivo de un reactor ni al uso de los distintos
          modelos de curvas de ruptura. En su lugar se muestran únicamente datos
          de ejemplo a modo ilustrativo
        </Paragraph>
        <SmallSubtitle>Beneficios de ser usuario</SmallSubtitle>
        <Paragraph>
          Al ser usuario de la aplicación tendrás acceso a toda la base de datos
          de adsorbatos, adsorbentes y sistemas que ha estudiado el laboratorio.
          A su vez, estarán disponibles las funcionalidades de cálculo de
          volumen efectivo, en caso de que se quiera consultar el tamaño de un
          reactor a construir, así como al uso de los modelos de curvas de
          rupturas para evaluar qué tan bueno es un adsorbente para remover
          ciertos adsorbatos
        </Paragraph>
        <br />
        <SmallSubtitle>¿Cómo puedo convertirme en usuario?</SmallSubtitle>
        <Paragraph>
          Para obtener las credenciales para ingresar al sistema, contactate con
          placeholder@mail.com y alguien se pondrá en contacto. No olvides
          incluir el motivo por el cual requeris las credenciales
          <br />
          <br />
        </Paragraph>
      </ContentFrame>
    </PageContainer>
  );
};
