import React from "react";
import {Typography} from "@material-ui/core";
import {Link} from "../../common/styles";
import DescriptionIcon from "@material-ui/icons/Description";

export const FileCard = ({fileName, onClick}) => {
  return (
    <div style={{display: "flex"}}>
      <DescriptionIcon />
      <div>
        <Typography>{fileName}</Typography>
        <Link onClick={onClick}>Borrar</Link>
      </div>
    </div>
  );
};
