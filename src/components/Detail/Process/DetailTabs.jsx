import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import {DetailGrid} from "./DetailGrid";
import {appColors} from "../../../common/styles";
import {CurvesTable} from "./Curves/CurvesTable";

export const DetailTabs = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{style: {background: appColors.primary}}}>
        <Tab label="Detalles" value={"one"} />
        <Tab label="Curvas de ruptura" value={"two"} />
      </Tabs>
      <TabPanel value={"one"} index={"one"}>
        <DetailGrid process={process} />
      </TabPanel>
      <TabPanel value={"two"} index={"two"}>
        <CurvesTable />
      </TabPanel>
    </TabContext>
  );
};
