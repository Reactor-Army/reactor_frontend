import {Results} from "../Models/Results";
import {ThomasInputFields} from "../Models/ThomasInputFields";
import {
  DataFrame,
  Title,
  TabsContainer,
  StyledTabPanel,
  SystemTitle,
} from "../Models/ModelsStyles";
import {ThomasResultFields} from "../Models/ThomasResultFields";
import {ThomasModelPlot} from "../Models/Plots/ThomasModelPlot";
import React, {useState} from "react";
import {generateEquation, thomasCoefficients} from "../Models/equations";
import {Row} from "../../../common/styles";
import {ModelTitle} from "../../../common/ModelTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import {appColors} from "../../../common/styles";
import {MODEL_RESULT_TABS} from "./ModelResultsConstants";
import {InfoThomasModal} from "../InfoModals/InfoThomasModal";

const thomasEquation = (data) => {
  const template = "$$\\frac{C}{C0} = \\frac{1}{1 + e^{first-secondV_{ef}}}$$";
  return generateEquation(template, thomasCoefficients(data));
};

export const ThomasResults = ({responses, colors}) => {
  const [value, setValue] = useState(MODEL_RESULT_TABS[0]);
  const [openModal, setOpenModal] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Row>
        <ModelTitle
          title={"Modelo de Thomas"}
          onInfoIconClick={() => setOpenModal(true)}
        />
        {responses[0].adsorbateName && responses[0].adsorbentName && (
          <SystemTitle>
            {responses[0].adsorbateName} - {responses[0].adsorbentName}
          </SystemTitle>
        )}
      </Row>
      <InfoThomasModal
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
          inputFields={<ThomasInputFields {...responses[0]} />}
          resultsInfo={responses.map((response, index) => (
            <StyledTabPanel value={MODEL_RESULT_TABS[index]} key={index}>
              <DataFrame>
                <Title color={colors[index % colors.length]}>
                  Resultados gr??fico {++index}
                </Title>
                <ThomasResultFields
                  kth={response.Kth}
                  q0={response.q0}
                  R2={response.R2}
                  equation={thomasEquation(response)}
                />
              </DataFrame>
            </StyledTabPanel>
          ))}
          plot={
            <ThomasModelPlot
              points={responses.map((response) => response.points)}
              expressions={responses}
            />
          }
        />
      </TabContext>
    </>
  );
};
