import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper} from "./FunctionPlotStyles";
import {appColors} from "../../common/styles";

export const FunctionPlot = ({
  expressions,
  points = [],
  xAxisLabel = "",
  yAxisLabel = "",
}) => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [maxAbscissa, setMaxAbscissa] = useState(10);
  const [maxOrdinate, setMaxOrdinate] = useState(1);

  const colors = [
    {dark: appColors.primary, light: appColors.lightBlue},
    {dark: appColors.red, light: appColors.red},
    {dark: appColors.green, light: appColors.lightGreen},
  ];

  const onWindowResize = () => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const functions = expressions.map((formula, index) => {
      return {
        fn: formula,
        color: colors[index % colors.length].dark,
        graphType: "polyline",
      };
    });

    const plotPoints = points.map((set, index) => {
      return {
        points: set,
        fnType: "points",
        graphType: "scatter",
        color: colors[index % colors.length].light,
      };
    });

    const scaleFactor = 1.25;
    functionPlot({
      target: "#plot",
      width: wrapperWidth,
      yAxis: {domain: [0, maxOrdinate], label: yAxisLabel},
      xAxis: {domain: [0, maxAbscissa * scaleFactor], label: xAxisLabel},
      grid: true,
      data: [...functions, ...plotPoints],
    });
  }, [wrapperWidth, points, maxAbscissa, maxOrdinate, expressions]);

  useEffect(() => {
    const allPoints = points.flat();
    if (allPoints.length > 0) {
      const maxCoordinates = allPoints.reduce((firstPoint, secondPoint) => {
        return [
          Math.max(firstPoint[0], secondPoint[0]),
          Math.max(firstPoint[1], secondPoint[1]),
        ];
      });

      setMaxAbscissa(maxCoordinates[0]);
      setMaxOrdinate(maxCoordinates[1]);
    }

    window.addEventListener("resize", onWindowResize);
    onWindowResize();
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <PlotWrapper ref={wrapperRef}>
      <Plot id="plot" />
    </PlotWrapper>
  );
};
