import { configureStore } from "@reduxjs/toolkit";
import adsorbatoReducer from "./features/adsorbato/adsorbatosSlice"

export default configureStore({
  reducer: {
      adsorbatos: adsorbatoReducer,
  },
});
