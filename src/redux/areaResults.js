import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {calculateReactorQ} from "../services/models";

export const calculateArea = createAsyncThunk(
  "calculateArea",
  calculateReactorQ,
);

const areaResultsSlice = createSlice({
  name: "calculateArea",
  initialState: {
    results: null,
    loading: false,
  },
  reducers: {
    setNull(state) {
      state.loading = false;
      state.results = null;
    },
  },
  extraReducers: {
    [calculateArea.pending]: (state) => {
      state.loading = true;
      state.results = null;
    },
    [calculateArea.fulfilled]: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },
    [calculateArea.rejected]: (state) => {
      state.loading = false;
      state.results = null;
    },
  },
});

export default areaResultsSlice.reducer;
export const {setNull} = areaResultsSlice.actions;
