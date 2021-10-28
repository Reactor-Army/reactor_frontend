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
  const [value, setValue] = React.useState(0);

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
          <Tab label="Detalles" value={0} />
          <Tab label="Curvas de ruptura" value={1} />
        </Tabs>
        <TabPanel value={0}>
          <DetailGrid process={process} />
        </TabPanel>
        <TabPanel value={1}>
          <CurvesTable processId={process.id} />
        </TabPanel>
      </TabContext>
    </DetailTabsContainer>
  );
};
