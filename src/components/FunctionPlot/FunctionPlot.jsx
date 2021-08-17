import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper} from "./FunctionPlotStyles";

export const FunctionPlot = ({
  expression,
  points = [],
  xAxisLabel = "",
  yAxisLabel = "",
}) => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [maxAbscissa, setMaxAbscissa] = useState(10);
  const [maxOrdinate, setMaxOrdinate] = useState(1);

  const onWindowResize = () => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    functionPlot({
      target: "#plot",
      width: wrapperWidth,
      yAxis: {domain: [0, maxOrdinate], label: yAxisLabel},
      xAxis: {domain: [0, maxAbscissa * 1.25], label: xAxisLabel},
      grid: true,
      data: [
        {
          fn: expression,
        },
        {
          points: points,
          fnType: "points",
          graphType: "scatter",
        },
      ],
    });
  }, [wrapperWidth, points, maxAbscissa, maxOrdinate]);

  useEffect(() => {
    let maxX = 0;
    let maxY = 0;
    if (points.length > 0) {
      points.map((point) => {
        const x = point[0];
        const y = point[1];

        if (x > maxX) {
          maxX = x;
        }

        if (y > maxY) {
          maxY = y;
        }
      });
      setMaxAbscissa(maxX);
      setMaxOrdinate(maxY);
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
