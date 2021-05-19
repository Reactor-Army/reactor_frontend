import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchIdealAdsorbents} from "../services/idealAdsorbents";

export const fetchIdealAdsorbents = createAsyncThunk(
  "fetchIdealAdsorbents",
  searchIdealAdsorbents,
);

export const resetIdealAdsorbents = () => {
  return {type: "idealAdsorbents/reset"};
};

const initialState = {
  idealAdsorbents: [],
  loading: false,
};

const idealAdsorbentsSlice = createSlice({
  name: "idealAdsorbents",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.idealAdsorbents = [];
    },
  },
  extraReducers: {
    [fetchIdealAdsorbents.pending]: (state) => {
      state.loading = true;
      state.idealAdsorbents = null;
    },
    [fetchIdealAdsorbents.fulfilled]: (state, action) => {
      state.loading = false;
      state.idealAdsorbents = action.payload;
    },
    [fetchIdealAdsorbents.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default idealAdsorbentsSlice.reducer;
