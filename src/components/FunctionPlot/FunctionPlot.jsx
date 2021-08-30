import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper} from "./FunctionPlotStyles";

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
    {dark: "#0000e8", light: "#4d4dd6"},
    {dark: "#f51707", light: "#f5574c"},
    {dark: "#00a811", light: "#57b560"},
  ];

  const onWindowResize = () => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const functions = expressions.map((formula, index) => {
      return {fn: formula, color: colors[index].dark};
    });

    const scaleFactor = 1.25;
    functionPlot({
      target: "#plot",
      width: wrapperWidth,
      yAxis: {domain: [0, maxOrdinate], label: yAxisLabel},
      xAxis: {domain: [0, maxAbscissa * scaleFactor], label: xAxisLabel},
      grid: true,
      disableZoom: true,
      data: [
        ...functions,
        {
          points: points,
          fnType: "points",
          graphType: "scatter",
        },
      ],
    });
  }, [wrapperWidth, points, maxAbscissa, maxOrdinate, expressions]);

  useEffect(() => {
    if (points.length > 0) {
      const maxCoordinates = points.reduce((firstPoint, secondPoint) => {
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
