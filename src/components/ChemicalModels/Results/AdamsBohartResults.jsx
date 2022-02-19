import {Results} from "../Models/Results";
import {AdamsBohartInputFields} from "../Models/AdamsBohartInputFields";
import {
  DataFrame,
  Title,
  SystemTitle,
  TabsContainer,
  StyledTabPanel,
} from "../Models/ModelsStyles";
import {AdamsBohartResultFields} from "../Models/AdamsBohartResultFields";
import {AdamsBohartModelPlot} from "../Models/Plots/AdamsBohartModelPlot";
import React, {useState} from "react";
import {adamsBohartCofficients, generateEquation} from "../Models/equations";
import {Row} from "../../../common/styles";
import {ModelTitle} from "../../../common/ModelTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import {appColors} from "../../../common/styles";
import {MODEL_RESULT_TABS} from "./ModelResultsConstants";
import {InfoAdamsBohartModal} from "../InfoModals/InfoAdamsBohartModal";

const adamsEquation = (data) => {
  const template = `$$\\frac{C}{C0} = e^{firstV_{ef}-second}$$`;
  return generateEquation(template, adamsBohartCofficients(data));
};

export const AdamsBohartResults = ({responses, colors}) => {
  const [value, setValue] = useState(MODEL_RESULT_TABS[0]);
  const [openModal, setOpenModal] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Row>
        <ModelTitle
          title={"Modelo de Adams-Bohart"}
          onInfoIconClick={() => setOpenModal(true)}
        />
        {responses[0].adsorbateName && responses[0].adsorbentName && (
          <SystemTitle>
            {responses[0].adsorbateName} - {responses[0].adsorbentName}
          </SystemTitle>
        )}
      </Row>
      <InfoAdamsBohartModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      />
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
          inputFields={<AdamsBohartInputFields {...responses[0]} />}
          resultsInfo={responses.map((response, index) => (
            <StyledTabPanel value={MODEL_RESULT_TABS[index]} key={index}>
              <DataFrame key={index}>
                <Title color={colors[index % colors.length]}>
                  Resultados gráfico {++index}
                </Title>
                <AdamsBohartResultFields
                  Kab={response.Kab}
                  N0={response.N0}
                  R2={response.R2}
                  equation={adamsEquation(response)}
                />
              </DataFrame>
            </StyledTabPanel>
          ))}
          plot={
            <AdamsBohartModelPlot
              points={responses.map((response) => response.points)}
              expressions={responses}
            />
          }
        />
      </TabContext>
    </>
  );
};
