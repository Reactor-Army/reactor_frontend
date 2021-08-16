import React from "react";

import {HomeTitle} from "./Styles";
import {HomepageWallText} from "./HomepageWallText";
import {ThomasModelPlot} from "../ThomasModelPlot/ThomasModelPlot";

export function Homepage() {
  return (
    <>
      <ThomasModelPlot F={0} C0={42.1} W={4.612} Kth={0.66} q0={2.39} />
      <HomeTitle>Reactor App </HomeTitle>
      <HomepageWallText />
    </>
  );
}
