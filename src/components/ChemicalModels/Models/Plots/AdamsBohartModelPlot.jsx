import React, {useState, useEffect} from "react";
import {ErrorMessage, ErrorMessageContainer} from "./PlotStyles";
import {FunctionPlot} from "../../../FunctionPlot/FunctionPlot";
import {MODEL_AXIS_LABELS} from "../../../../common/fields";
import {adamsBohartCofficients} from "../equations";

export const AdamsBohartModelPlot = ({
  expressions,
  points = [],
  showArea = false,
}) => {
  const [validParamters, setValidParameters] = useState();
  const [functions, setFunctions] = useState();

  useEffect(() => {
    if (
      expressions.every((expression) => {
        return expression.F > 0 && expression.U0 > 0;
      })
    ) {
      setValidParameters(true);
      setFunctions(
        expressions.map((expression) => {
          const [firstCoefficient, secondCoefficient] = adamsBohartCofficients(
            expression,
          );
          /*The following expression is the exponential form that the Adams-Bohart's model uses to try
            to fit a set of points and is the one that gets graphed at the Adams-Bohart's model view*/
          return `exp((${firstCoefficient})x - ${secondCoefficient})`;
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
          showArea={showArea}
        />
      ) : (
        <ErrorMessageContainer>
          <ErrorMessage>
            Error al graficar, el caudal volumétrico de operación (F) y la
            velocidad lineal del liquido (U0) deben ser mayor a cero
          </ErrorMessage>
        </ErrorMessageContainer>
      )}
    </>
  );
};
