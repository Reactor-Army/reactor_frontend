import React, {useState, useEffect} from "react";
import {ErrorMessage, ErrorMessageContainer} from "./ThomasModelPlotStyles";
import {FunctionPlot} from "../../../FunctionPlot/FunctionPlot";
import {THOMAS_MODEL_AXIS_LABELS} from "../../../../common/fields";

export const ThomasModelPlot = ({Kth, F, q0, W, C0, points}) => {
  const [validParamters, setValidParameters] = useState();
  const [expression, setExpression] = useState();

  useEffect(() => {
    if (F > 0) {
      setValidParameters(true);
      setExpression(`1/(1+exp(${(Kth / F) * (q0 * W)} - ${(Kth / F) * C0}x))`);
    } else {
      setValidParameters(false);
    }
  }, [Kth, F, q0, W, C0, points]);

  return (
    <>
      {validParamters && expression ? (
        <FunctionPlot
          expression={expression}
          points={points}
          xAxisLabel={THOMAS_MODEL_AXIS_LABELS.X_LABEL}
          yAxisLabel={THOMAS_MODEL_AXIS_LABELS.Y_LABEL}
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
