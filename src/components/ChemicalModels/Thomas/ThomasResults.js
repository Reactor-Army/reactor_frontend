import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./ThomasModelPlot/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import React from "react";

export const ThomasResults = ({response}) => {
  const test = {
    F: 0.5,
    W: 4.612,
    C0: 42.1,
    Kth: 3,
    q0: 0.5,
  };

  const test2 = {
    F: 0.5,
    W: 4.612,
    C0: 42.1,
    Kth: 2.3,
    q0: 1,
  };

  return (
    <div>
      <ResultsTitle />
      <ThomasModelPlot
        points={response.points}
        expressions={[response, test, test2]}
      />
      <ThomasResultFields kth={response.Kth} q0={response.q0} />
    </div>
  );
};
