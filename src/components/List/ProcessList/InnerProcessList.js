import {ProcessCardWrapper} from "../../Card/ProcessCard/ProcessCardWrapper";
import {ListContainer} from "../ListStyles";
import React, {useState} from "react";

export const InnerProcessList = ({processes, onProcessClick}) => {
  const [selectedProcess, setSelectedProcess] = useState(null);

  const _onProcessClick =
    onProcessClick &&
    ((id) => {
      setSelectedProcess(id);
      onProcessClick(id);
    });
  return (
    <ListContainer>
      {processes.map((process) => (
        <ProcessCardWrapper
          process={process}
          key={process.id}
          selected={selectedProcess === process.id}
          onProcessClick={_onProcessClick}
        />
      ))}
    </ListContainer>
  );
};
