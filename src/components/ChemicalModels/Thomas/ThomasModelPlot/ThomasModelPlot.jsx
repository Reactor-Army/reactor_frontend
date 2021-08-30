import React, {useState, useEffect} from "react";
import {ErrorMessage, ErrorMessageContainer} from "./ThomasModelPlotStyles";
import {FunctionPlot} from "../../../FunctionPlot/FunctionPlot";
import {THOMAS_MODEL_AXIS_LABELS} from "../../../../common/fields";

export const ThomasModelPlot = ({expressions, points}) => {
  const [validParamters, setValidParameters] = useState();
  const [functions, setFunctions] = useState();

  useEffect(() => {
    if (
      expressions.every((expression) => {
        return expression.F > 0;
      })
    ) {
      setValidParameters(true);
      setFunctions(
        expressions.map((expression) => {
          return `1/(1+exp(${
            (expression.Kth / expression.F) * (expression.q0 * expression.W)
          } - ${(expression.Kth / expression.F) * expression.C0}x))`;
        }),
      );
    } else {
      setValidParameters(false);
    }
  }, [expressions, points]);
  return (
    <>
      {validParamters && expressions.length ? (
        <FunctionPlot
          expressions={functions}
          points={points} //*
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
