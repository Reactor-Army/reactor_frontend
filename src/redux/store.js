import {configureStore} from "@reduxjs/toolkit";
import adsorbateReducer from "./adsorbatesSlice";

export default configureStore({
  reducer: {
    adsorbates: adsorbateReducer,
  },
});
