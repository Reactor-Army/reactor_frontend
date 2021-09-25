import React from "react";

import {
  Container,
  HelpText,
  SmallHelpText,
  DownloadLink,
} from "./TemplateFileHelpStyles";

export const TemplateFileHelp = ({url}) => {
  return (
    <Container>
      <HelpText>¿Problemas para subir el archivo de datos?</HelpText>
      <SmallHelpText>
        No te preocupes, a continuación te dejamos un
        <DownloadLink href={url} alt="Template File">
          archivo de ejemplo
        </DownloadLink>
      </SmallHelpText>
    </Container>
  );
};
