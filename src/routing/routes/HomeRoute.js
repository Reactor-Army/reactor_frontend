import React from "react";
import {Homepage} from "../../components/HomePage/Homepage";
import {CommonPage} from "../../components/CommonPage/CommonPage";

export const HomeRoute = () => {
  return (
    <CommonPage>
      <Homepage />
    </CommonPage>
  );
};
