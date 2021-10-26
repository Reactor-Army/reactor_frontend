import {createSlice} from "@reduxjs/toolkit";
import {getModelData} from "../services/models";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchModelData = createAsyncThunk("fetchModelData", getModelData);

const modelDataSlice = createSlice({
  name: "modelData",
  initialState: {
    models: [],
    loading: false,
  },
  reducers: {
    addModel: (state, action) => {
      state.models = [...state.models, action.payload];
    },
    reset: (state) => {
      state.models = [];
    },
  },
});

export default modelDataSlice.reducer;
export const {addModel, reset} = modelDataSlice.actions;
