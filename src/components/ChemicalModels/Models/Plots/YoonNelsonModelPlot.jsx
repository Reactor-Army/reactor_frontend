import React, {useState, useEffect} from "react";
import {ErrorMessage, ErrorMessageContainer} from "./PlotStyles";
import {FunctionPlot} from "../../../FunctionPlot/FunctionPlot";
import {MODEL_AXIS_LABELS} from "../../../../common/fields";
import {yoonNelsonCoefficients} from "../equations";

export const YoonNelsonModelPlot = ({expressions, points = []}) => {
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
          const [first, second] = yoonNelsonCoefficients(expression);
          const numerator = `exp(${first}*x - ${second})`;
          /*The following expression is the exponential form that the Yoon-Nelson's model uses to try
            to fit a set of points and is the one that gets graphed at the Yoon-Nelson's model view*/
          return `${numerator}/(1+(${numerator}))`;
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
          points={points}
          xAxisLabel={MODEL_AXIS_LABELS.X_LABEL}
          yAxisLabel={MODEL_AXIS_LABELS.Y_LABEL}
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
