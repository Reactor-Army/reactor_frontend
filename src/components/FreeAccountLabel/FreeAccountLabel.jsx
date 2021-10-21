import React from "react";
import {Label, Link, Content} from "./FreeAccounLabelStyles";
import {URLS} from "../../routing/urls";

export const FreeAccountLabel = () => {
  return (
    <Label>
      <Content>
        Estas utilizando una versión limitada. Enterate de los beneficios de la
        versión completa <Link href={URLS.FULL_APP_DETAIL}>aquí</Link>
      </Content>
    </Label>
  );
};
