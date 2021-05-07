import React from "react";
import {appFontFamily} from "../common/styles";

export function PageTitle({title}) {
  return (
    <div
      className="row"
      style={{fontFamily: appFontFamily.card, fontSize: "26px"}}>
      <h1>{title}</h1>
    </div>
  );
}
