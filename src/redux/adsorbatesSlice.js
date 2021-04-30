import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbates} from "../services/adsorbates";

export const fetchAdsorbates = createAsyncThunk(
  "fetchAdsorbates",
  getAdsorbates,
);

const adsorbatesSlice = createSlice({
  name: "adsorbates",
  initialState: {
    adsorbates: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbates.pending]: (state) => {
      state.loading = true;
    },
    [fetchAdsorbates.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbates = [...state.adsorbates, ...action.payload];
    },
    [fetchAdsorbates.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbatesSlice.reducer;
