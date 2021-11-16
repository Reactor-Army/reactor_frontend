import {Form, FORM_LAYOUTS} from "../Form/Form";
import {FormSelectorField} from "../Form/Fields/FormFields";
import {CHART_AREA_FIELDS} from "../../common/fields";
import React, {useEffect, useState} from "react";
import {isSet} from "../Form/Validation/formValidations";
import {CHART_AREA_FORM_INITIAL_VALUES} from "../../common/constants";
import {ChartPickerContainer, TitleContainer} from "./Styles";
import {Title} from "../ChemicalModels/Models/ModelsStyles";
import {getCurves} from "../../services/processes";
import {MessageContainer} from "../IdealAdsorbentList/Styles";
import Typography from "@material-ui/core/Typography";

export const ChartPicker = ({onSubmit, processId}) => {
  const [errorValues, setErrorValues] = useState({});
  const [charts, setCharts] = useState(null);
  const [baseLines, setBaseLines] = useState(null);
  useEffect(async () => {
    const response = await getCurves(processId);

    setCharts(
      response
        .filter((chart) => !chart.esLineaBase)
        .map((chart) => {
          return {
            label: chart.nombre,
            value: chart.id,
          };
        }),
    );
    setBaseLines(
      response
        .filter((chart) => chart.esLineaBase)
        .map((chart) => {
          return {
            label: chart.nombre,
            value: chart.id,
          };
        }),
    );
  }, [processId]);

  if (baseLines && baseLines.length === 0) {
    return (
      <MessageContainer>
        <Typography>
          Este sistema no tiene líneas de base cargadas. Seleccioná otro sistema
          o bien cargá una línea de base para continuar.
        </Typography>
      </MessageContainer>
    );
  }
  return (
    <ChartPickerContainer>
      <TitleContainer>
        <Title>Seleccioná el gráfico</Title>
      </TitleContainer>
      <Form
        layout={FORM_LAYOUTS.ROWS}
        singleColumn={true}
        initialValues={CHART_AREA_FORM_INITIAL_VALUES}
        onSubmit={onSubmit}
        buttonLabel="Calcular área"
        fields={[
          <FormSelectorField
            key={0}
            items={charts}
            placeholder={"Gráfico"}
            name={CHART_AREA_FIELDS.CHART_ID}
            error={errorValues[CHART_AREA_FIELDS.CHART_ID]}
            validate={(value) => {
              setErrorValues((previousState) => {
                return {
                  ...previousState,
                  [CHART_AREA_FIELDS.CHART_ID]: isSet(value),
                };
              });
            }}
          />,
          <FormSelectorField
            key={1}
            items={baseLines}
            placeholder={"Línea base"}
            name={CHART_AREA_FIELDS.BASE_LINE_ID}
            error={errorValues[CHART_AREA_FIELDS.BASE_LINE_ID]}
            validate={(value) => {
              setErrorValues((previousState) => {
                return {
                  ...previousState,
                  [CHART_AREA_FIELDS.BASE_LINE_ID]: isSet(value),
                };
              });
            }}
          />,
        ]}
      />
    </ChartPickerContainer>
  );
};
