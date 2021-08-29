import React from "react";
import {Frame, Image, Text, Subtitle} from "./PortraitStyles";

export const Portrait = ({image, text, subtitle = ""}) => {
  return (
    <Frame>
      <Image src={image} alt="portrait" />
      <Text>{text}</Text>
      <Subtitle>{subtitle}</Subtitle>
    </Frame>
  );
};
