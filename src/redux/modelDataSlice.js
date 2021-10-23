import {createSlice} from "@reduxjs/toolkit";

const modelDataSlice = createSlice({
  name: "modelData",
  initialState: {
    models: [],
  },
  reducers: {
    addModel: (state, action) => {
      state.models = [
        ...state.models,
        {request: action.payload.request, response: action.payload.response},
      ];
    },
    reset: (state) => {
      state.models = [];
    },
  },
});

export default modelDataSlice.reducer;
export const {addModel, reset} = modelDataSlice.actions;
