import {configureStore} from "@reduxjs/toolkit";
import adsorbateReducer from "./components/AdsorbateList/adsorbatesSlice";

export default configureStore({
  reducer: {
    adsorbates: adsorbateReducer,
  },
});
