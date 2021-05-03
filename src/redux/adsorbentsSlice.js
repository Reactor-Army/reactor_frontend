import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbents} from "../services/adsorbents";

export const fetchAdsorbents = createAsyncThunk(
  "fetchAdsorbents",
  getAdsorbents,
);

const adsorbentsSlice = createSlice({
  name: "adsorbents",
  initialState: {
    adsorbents: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbents.pending]: (state) => {
      state.loading = true;
    },
    [fetchAdsorbents.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbents = [...state.adsorbents, ...action.payload];
    },
    [fetchAdsorbents.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbentsSlice.reducer;
