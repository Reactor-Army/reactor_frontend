import {configureStore} from "@reduxjs/toolkit";
import adsorbateReducer from "./adsorbatesSlice";
import adsorbentReducer from "./adsorbentsSlice";
import processReducer from "./processesSlice";
import idealAdsorbentsReducer from "./idealAdsorbentsSlice";

export default configureStore({
  reducer: {
    adsorbates: adsorbateReducer,
    adsorbents: adsorbentReducer,
    processes: processReducer,
    idealAdsorbents: idealAdsorbentsReducer,
    process: processReducer,
  },
});
