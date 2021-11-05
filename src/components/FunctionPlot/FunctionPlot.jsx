import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper, ZoomIconsContainer} from "./FunctionPlotStyles";
import {appColors} from "../../common/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {settings} from "../../config/settings";

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
      yAxis: {domain: [0, maxOrdinate * scaleFactor], label: yAxisLabel},
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

  const zoom = (delta) => {
    // Buscamos el elemento dentro de la librería que handlea el evento de zoom
    // y le disparamos un evento de mouse wheel, exactamente en el centro
    // del elemento (el mismo gráfico). El delta es la "intensidad" del
    // mousewheel, qué tanto le das, cuanto mayor sea, más zoom
    const targetNode = wrapperRef.current.querySelector(".zoom-and-drag");
    const domRect = targetNode.getBoundingClientRect();
    const centerX = (domRect.left + domRect.right) / 2;
    const centerY = (domRect.top + domRect.bottom) / 2;
    const wheelEvt = new WheelEvent("wheel", {
      deltaY: delta,
      clientX: centerX,
      clientY: centerY,
    });
    targetNode.dispatchEvent(wheelEvt);
  };
  const zoomIn = () => {
    zoom(-settings.CHART_ZOOM_INTENSITY);
  };
  const zoomOut = () => {
    zoom(settings.CHART_ZOOM_INTENSITY);
  };

  return (
    <PlotWrapper ref={wrapperRef}>
      <ZoomIconsContainer>
        <AddIcon onClick={zoomIn} />
        <RemoveIcon onClick={zoomOut} />
      </ZoomIconsContainer>
      <Plot id="plot" />
    </PlotWrapper>
  );
};
