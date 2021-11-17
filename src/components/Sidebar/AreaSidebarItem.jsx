import React from "react";
import {useDispatch} from "react-redux";
import {setNull} from "../../redux/areaResults";
import {SidebarItem} from "./SidebarItem";

export const AreaSidebarItem = ({text, onClick}) => {
  const dispatch = useDispatch();
  const _onClick = () => {
    dispatch(setNull());
    onClick();
  };
  return <SidebarItem onClick={_onClick} text={text} />;
};
