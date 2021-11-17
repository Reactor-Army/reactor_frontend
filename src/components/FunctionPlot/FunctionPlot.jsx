import React, {useRef, useState, useEffect} from "react";
import functionPlot from "function-plot";
import {Plot, PlotWrapper, ZoomIconsContainer} from "./FunctionPlotStyles";
import {appColors} from "../../common/styles";
import {settings} from "../../config/settings";
import {ZoomButtonWrapper} from "./FunctionPlotStyles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const FunctionPlot = ({
  expressions,
  points = [],
  xAxisLabel = "",
  yAxisLabel = "",
  // eslint-disable-next-line no-unused-vars
  area = false,
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
      let color = colors[index % colors.length].dark;
      if (area) {
        color = {
          0: appColors.lightBlue,
          1: appColors.white,
          2: appColors.white,
        }[index];
      }
      return {
        fn: formula,
        color: color,
        closed: area,
      };
    });

    const plotPoints = points.map((set, index) => {
      let points = set;
      if (area && index !== 0) {
        points = [];
      }
      return {
        points: points,
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
        <ZoomButtonWrapper>
          <AddIcon onClick={zoomIn} />
        </ZoomButtonWrapper>
        <ZoomButtonWrapper>
          <RemoveIcon onClick={zoomOut} />
        </ZoomButtonWrapper>
      </ZoomIconsContainer>
      <Plot id="plot" />
    </PlotWrapper>
  );
};
