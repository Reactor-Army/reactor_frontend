import adsorbateReducer from "./adsorbatesSlice";
import adsorbentReducer from "./adsorbentsSlice";
import processesReducer from "./processesSlice";
import processReducer from "./processSlice";
import idealAdsorbentsReducer from "./idealAdsorbentsSlice";
import adsorbateDetailReducer from "./adsorbateSlice";
import adsorbentDetailReducer from "./adsorbentSlice";
import crudSnackbarReducer from "./snackbar";
import authReducer from "./auth";
import usersReducer from "./usersSlice";
import userReducer from "./userSlice";
import rolesReducer from "./rolesSlice";
import modelDataReducer from "./modelDataSlice";
import areaResultsReducer from "./areaResults";

import thunkMiddleware from "redux-thunk";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {applyMiddleware, combineReducers, createStore} from "redux"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const rootReducer = combineReducers({
  adsorbates: adsorbateReducer,
  adsorbents: adsorbentReducer,
  processes: processesReducer,
  idealAdsorbents: idealAdsorbentsReducer,
  process: processReducer,
  adsorbate: adsorbateDetailReducer,
  adsorbent: adsorbentDetailReducer,
  crudSnackbar: crudSnackbarReducer,
  auth: authReducer,
  users: usersReducer,
  user: userReducer,
  roles: rolesReducer,
  modelData: modelDataReducer,
  areaResults: areaResultsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(persistedReducer, undefined, middlewares);
export const persistor = persistStore(store);

export default store;
