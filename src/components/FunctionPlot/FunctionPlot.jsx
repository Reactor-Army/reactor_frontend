import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper} from "./FunctionPlotStyles";
import {useAsync} from "../../customHooks/useAsync";

export const FunctionPlot = ({
  expression,
  points = [],
  xAxisLabel = "",
  yAxisLabel = "",
}) => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const onWindowResize = () => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  };

  useAsync(() => {
    functionPlot({
      target: "#plot",
      width: wrapperWidth,
      yAxis: {domain: [0, 1], label: yAxisLabel},
      xAxis: {domain: [0, 10], label: xAxisLabel},
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
  }, [wrapperWidth, points]);

  useEffect(() => {
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
