import {ProcessCardWrapper} from "../../Card/ProcessCard/ProcessCardWrapper";
import React from "react";
import {ListContainer} from "../ListStyles";

export const InnerProcessList = ({processes, onProcessClick}) => {
  return (
    <ListContainer>
      {processes.map((process) => (
        <ProcessCardWrapper
          process={process}
          key={process.id}
          onProcessClick={onProcessClick}
        />
      ))}
    </ListContainer>
  );
};
