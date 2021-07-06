import {BodyText} from "./CommonCardStyles";
import {Link} from "../../common/styles";
import React from "react";

export const SeeMoreLink = (props) => {
  return (
    <BodyText>
      <Link onClick={props.onProcessClick}>Ver procesos</Link>
    </BodyText>
  );
};
