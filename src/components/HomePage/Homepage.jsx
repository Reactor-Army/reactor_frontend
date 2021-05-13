import React from "react";
import Container from "@material-ui/core/Container";

import {HomeTitle} from "./Styles";
import {HomepageWallText} from "./HomepageWallText";

export function Homepage() {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "50px",
      }}>
      <HomeTitle>Reactor App </HomeTitle>
      <HomepageWallText />
    </Container>
  );
}
