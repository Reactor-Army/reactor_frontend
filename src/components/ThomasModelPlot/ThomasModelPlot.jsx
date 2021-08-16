import React, {useState, useEffect} from "react";
import {FunctionPlot} from "../FunctionPlot/FunctionPlot";
import {ErrorMessage, ErrorMessageContainer} from "./ThomasModelPlotStyles";

export const ThomasModelPlot = ({Kth, F, q0, W, C0, points}) => {
  const [validParamters, setValidParameters] = useState(false);
  const [expression, setExpression] = useState();

  useEffect(() => {
    if (F > 0) {
      setValidParameters(true);
      setExpression(`1/(1+exp(${(Kth / F) * (q0 * W)} - ${(Kth / F) * C0}x))`);
    } else {
      setValidParameters(false);
    }
  }, [F]);

  return (
    <>
      {validParamters && expression ? (
        <FunctionPlot
          expression={expression}
          points={points}
          xAxisLabel="T [min]"
          yAxisLabel="C/C₀"
        />
      ) : (
        <ErrorMessageContainer>
          <ErrorMessage>
            Error al graficar, el caudal volumétrico de operación (F) debe ser
            mayor a cero
          </ErrorMessage>
        </ErrorMessageContainer>
      )}
    </>
  );
};
