import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import {DetailGrid} from "./DetailGrid";
import {appColors} from "../../../common/styles";
import {CurvesTable} from "./Curves/CurvesTable";
import {DetailTabsContainer} from "./Styles";

export const DetailTabs = ({process}) => {
  const TAB_DETAILS = "Details";
  const TAB_CHARTS = "Charts";
  const [value, setValue] = React.useState(TAB_DETAILS);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DetailTabsContainer>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{style: {background: appColors.primary}}}>
          <Tab label="Detalles" value={TAB_DETAILS} />
          <Tab label="Curvas de ruptura" value={TAB_CHARTS} />
        </Tabs>
        <TabPanel value={TAB_DETAILS}>
          <DetailGrid process={process} />
        </TabPanel>
        <TabPanel value={TAB_CHARTS}>
          <CurvesTable processId={process.id} />
        </TabPanel>
      </TabContext>
    </DetailTabsContainer>
  );
};
