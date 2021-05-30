import {configureStore} from "@reduxjs/toolkit";
import adsorbateReducer from "./adsorbatesSlice";
import adsorbentReducer from "./adsorbentsSlice";
import processesReducer from "./processesSlice";
import processReducer from "./processSlice";
import idealAdsorbentsReducer from "./idealAdsorbentsSlice";
import adsorbateDetailReducer from "./adsorbateSlice";

export default configureStore({
  reducer: {
    adsorbates: adsorbateReducer,
    adsorbents: adsorbentReducer,
    processes: processesReducer,
    idealAdsorbents: idealAdsorbentsReducer,
    process: processReducer,
    adsorbate: adsorbateDetailReducer,
  },
});
