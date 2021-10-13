import React, {useState, useEffect} from "react";
import {TopBar} from "../Main/TopBar";
import {Sidebar} from "../Sidebar/Sidebar";
import {useStyles, SidebarWrapper} from "./CommonPageStyles";
import {Container} from "./CommonPageStyles";
import {StoreSnackbar} from "../StoreSnackbar/StoreSnackbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/userSlice";

export const CommonPage = ({children, showSideBar, showTopBar}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  const {userData} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(fetchUser(userData.id));
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
        <main className={showTopBar && showSideBar ? classes.content : ""}>
          {children}
          <StoreSnackbar />
        </main>
      </Container>
    </>
  );
};
