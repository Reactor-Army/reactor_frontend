import React, {useState, useEffect} from "react";
import {TopBar} from "../Main/TopBar";
import {Sidebar} from "../Sidebar/Sidebar";
import {useStyles, SidebarWrapper} from "./CommonPageStyles";
import {Container} from "./CommonPageStyles";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/userSlice";
import {CrudSnackbar} from "../CrudSnackbar/CrudSnackbar";
import {FreeAccountLabel} from "../FreeAccountLabel/FreeAccountLabel";
import {resetForceLogout} from "../../redux/auth";

export const CommonPage = ({children, showSideBar, showTopBar}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  const {loggedIn, userData, forceLogout} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(fetchUser(userData.id));
    }
  }, []);

  useEffect(() => {
    if (forceLogout) {
      dispatch(resetForceLogout());
    }
  });

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
        {showSideBar && !loggedIn && <FreeAccountLabel />}
        <main className={showTopBar && showSideBar ? classes.content : ""}>
          {children}
          <CrudSnackbar />
        </main>
      </Container>
    </>
  );
};
