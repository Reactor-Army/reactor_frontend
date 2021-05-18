import {configureStore} from "@reduxjs/toolkit";
import adsorbateReducer from "./adsorbatesSlice";
import adsorbentReducer from "./adsorbentsSlice";
import processesReducer from "./processesSlice";
import processReducer from "./processSlice";

export default configureStore({
  reducer: {
    adsorbates: adsorbateReducer,
    adsorbents: adsorbentReducer,
    processes: processesReducer,
    process: processReducer,
  },
});
