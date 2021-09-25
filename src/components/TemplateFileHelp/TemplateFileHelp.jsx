import React from "react";

import {
  Container,
  HelpText,
  SmallHelpText,
  DownloadLink,
} from "./TemplateFileHelpStyles";

export const TemplateFileHelp = ({onClick}) => {
  return (
    <Container>
      <HelpText>¿Problemas para subir el archivo de datos?</HelpText>
      <SmallHelpText>
        No te preocupes, a continuación te dejamos un
        <DownloadLink onClick={onClick}>archivo de ejemplo</DownloadLink>
      </SmallHelpText>
    </Container>
  );
};
