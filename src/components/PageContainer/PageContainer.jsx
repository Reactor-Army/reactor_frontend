import React from "react";
import "./PageContainer.css";

export const PageContainer = (props) => {
  return <div className="page-container">{props.children}</div>;
};
