import React from "react";
import {Row, Icon} from "../common/styles";
import info_icon from "../resources/images/info_icon.png";

export function ModelTitle({title}) {
  const imageClick = () => {
    console.log("Click");
  };
  return (
    <Row>
      <>{title}</>
      <Icon src={info_icon} alt="Logo Fiuba" onClick={() => imageClick()} />
    </Row>
  );
}
