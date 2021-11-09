import {Form, FORM_LAYOUTS} from "../Form/Form";
import {FormSelectorField} from "../Form/Fields/FormFields";
import {CHART_AREA_FIELDS} from "../../common/fields";
import React, {useEffect, useState} from "react";
import {isSet} from "../Form/Validation/formValidations";
import {CHART_AREA_FORM_INITIAL_VALUES} from "../../common/constants";
import {ChartPickerContainer, TitleContainer} from "./Styles";
import {Title} from "../ChemicalModels/Models/ModelsStyles";
import {getCurves} from "../../services/processes";

export const ChartPicker = ({onSubmit, processId}) => {
  const [errorValues, setErrorValues] = useState({});

  const [charts, setCharts] = useState(null);
  useEffect(async () => {
    const response = await getCurves(processId);

    setCharts(
      response
        .filter((chart) => !chart.lineaBase)
        .map((chart) => {
          return {
            label: chart.nombre,
            value: chart.id,
          };
        }),
    );
  });
  const chartIds = [
    {
      label: "Gráfico 1",
      value: 1,
    },
    {
      label: "Línea base 2",
      value: 2,
    },
  ];
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
            items={chartIds}
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
