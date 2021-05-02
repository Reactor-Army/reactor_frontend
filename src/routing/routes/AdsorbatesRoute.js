import React from "react";
import {AdsorbateList} from "../../components/AdsorbateList/AdsorbateList";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {PageContainer} from "../../components/PageContainer/PageContainer";

export const AdsorbatesRoute = () => {
  return (
    <PageContainer>
      <Sidebar />
      <AdsorbateList />
    </PageContainer>
  );
};
