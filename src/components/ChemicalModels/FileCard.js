import React from "react";
import {Typography} from "@material-ui/core";
import {Link} from "../../common/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import {FileCardContainer} from "./ChemicalModelStyles";

export const FileCard = ({fileName, onClick}) => {
  return (
    <FileCardContainer>
      <DescriptionIcon />
      <div>
        <Typography>{fileName}</Typography>
        <Link onClick={onClick}>Borrar</Link>
      </div>
    </FileCardContainer>
  );
};
