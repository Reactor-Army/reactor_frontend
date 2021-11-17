import React, {useState, useEffect} from "react";
import {ErrorMessage, ErrorMessageContainer} from "./PlotStyles";
import {FunctionPlot} from "../../../FunctionPlot/FunctionPlot";
import {MODEL_AXIS_LABELS} from "../../../../common/fields";
import {thomasCoefficients} from "../equations";

export const ThomasModelPlot = ({expressions, points = [], area = false}) => {
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
          const [firstCoefficient, secondCoefficient] = thomasCoefficients(
            expression,
          );
          /*The following expression is the exponential form that the Thomas's model uses to try
            to fit a set of points and is the one that gets graphed at the Thomas's model view*/
          return `1/(1+exp(${firstCoefficient} - ${secondCoefficient}x))`;
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
          area={area}
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
