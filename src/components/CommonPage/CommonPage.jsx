import React, {useState} from "react";
import {TopBar} from "../Main/TopBar";
import {Sidebar} from "../Sidebar/Sidebar";
import Container from "@material-ui/core/Container";
import {useStyles, SidebarWrapper} from "./CommonPageStyles";

export const CommonPage = ({
  children,
  showSideBar = true,
  showTopBar = true,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return (
    <>
      {showTopBar && <TopBar handleDrawerToggle={handleDrawerToggle} />}
      {showSideBar && (
        <SidebarWrapper>
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </SidebarWrapper>
      )}
      <Container className={classes.container}>
        <main className={classes.content}>{children}</main>
      </Container>
    </>
  );
};
