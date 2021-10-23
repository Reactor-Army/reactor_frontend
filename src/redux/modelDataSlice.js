import {createSlice} from "@reduxjs/toolkit";

const modelDataSlice = createSlice({
  name: "modelData",
  initialState: {
    models: [],
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
