import React from "react";
import {Row, Icon} from "../common/styles";
import info_icon from "../resources/images/info_icon.png";

export function ModelTitle({title, onInfoIconClick}) {
  return (
    <>
      <Row>
        {title}
        <Icon src={info_icon} alt="Informacion" onClick={onInfoIconClick} />
      </Row>
    </>
  );
}
