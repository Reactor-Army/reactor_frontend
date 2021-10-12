import React, {useState} from "react";
import {TopBar} from "../Main/TopBar";
import {Sidebar} from "../Sidebar/Sidebar";
import {useStyles, SidebarWrapper} from "./CommonPageStyles";
import {Container} from "./CommonPageStyles";
//import {CrudSnackbar} from "../CrudSnackbar/CrudSnackbar";
import {StoreSnackbar} from "../StoreSnackbar/StoreSnackbar";

export const CommonPage = ({children, showSideBar, showTopBar}) => {
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
      <Container>
        <main className={showTopBar && showSideBar ? classes.content : ""}>
          {children}
          <StoreSnackbar />
        </main>
      </Container>
    </>
  );
};
