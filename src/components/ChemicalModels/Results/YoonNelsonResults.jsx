import {Results} from "../Models/Results";
import {YoonNelsonInputFields} from "../Models/YoonNelsonInputFields";
import {
  DataFrame,
  Title,
  SystemTitle,
  TabsContainer,
  StyledTabPanel,
} from "../Models/ModelsStyles";
import {YoonNelsonResultFields} from "../Models/YoonNelsonResultFields";
import {YoonNelsonModelPlot} from "../Models/Plots/YoonNelsonModelPlot";
import React, {useState} from "react";
import {generateEquation, yoonNelsonCoefficients} from "../Models/equations";
import {Row} from "../../../common/styles";
import {ModelTitle} from "../../../common/ModelTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import {appColors} from "../../../common/styles";
import {MODEL_RESULT_TABS} from "./ModelResultsConstants";

const yoonNelsonEquation = (data) => {
  const exponential = "e^{firstV{ef}-second}";
  const template = `$$\\frac{C}{C0} = \\frac{${exponential}}{1 + ${exponential}}$$`;
  return generateEquation(template, yoonNelsonCoefficients(data));
};

export const YoonNelsonResults = ({responses, colors}) => {
  const [value, setValue] = useState(MODEL_RESULT_TABS[0]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Row>
        <ModelTitle title={"Modelo de Yoon-Nelson"} />
        {responses[0].adsorbateName && responses[0].adsorbentName && (
          <SystemTitle>
            {responses[0].adsorbateName} - {responses[0].adsorbentName}
          </SystemTitle>
        )}
      </Row>
      <TabContext value={value}>
        {responses.length > 1 && (
          <TabsContainer>
            <Tabs
              value={value}
              onChange={handleTabChange}
              centered
              TabIndicatorProps={{style: {background: appColors.primary}}}>
              {responses.map((response, index) => {
                return (
                  <Tab
                    label={`Grafico ${index + 1}`}
                    key={index}
                    value={MODEL_RESULT_TABS[index]}
                  />
                );
              })}
            </Tabs>
          </TabsContainer>
        )}
        <Results
          inputFields={<YoonNelsonInputFields {...responses[0]} />}
          resultsInfo={responses.map((response, index) => (
            <StyledTabPanel value={MODEL_RESULT_TABS[index]} key={index}>
              <DataFrame key={index}>
                <Title color={colors[index % colors.length]}>
                  Resultados gráfico {++index}
                </Title>
                <YoonNelsonResultFields
                  Kyn={response.Kyn}
                  t={response.t}
                  R2={response.R2}
                  equation={yoonNelsonEquation(response)}
                />
              </DataFrame>
            </StyledTabPanel>
          ))}
          plot={
            <YoonNelsonModelPlot
              points={responses.map((response) => response.points)}
              expressions={responses}
            />
          }
        />
      </TabContext>
    </>
  );
};
