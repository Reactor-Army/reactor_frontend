import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  getAdsorbates,
  searchAdsorbates,
  getAdsorbatesWithIupacNotation,
} from "../services/adsorbates";

export const fetchAdsorbates = createAsyncThunk(
  "fetchAdsorbates",
  getAdsorbates,
);

export const fetchAdsorbatesWithIupacNotation = createAsyncThunk(
  "fetchAdsorbatesWithIupacNotation",
  getAdsorbatesWithIupacNotation,
);

export const createSearchAdsorbatesThunk = (name, charge) => {
  const callback = () => searchAdsorbates(name, charge);
  return createAsyncThunk("fetchAdsorbates", callback);
};

const adsorbatesSlice = createSlice({
  name: "adsorbates",
  initialState: {
    adsorbates: [],
    loading: false,
    adsorbatesWithIupacNotation: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbates.pending]: (state) => {
      state.loading = true;
      state.processes = null;
    },
    [fetchAdsorbates.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbates = action.payload;
    },
    [fetchAdsorbates.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAdsorbatesWithIupacNotation.pending]: (state) => {
      state.loading = true;
      state.processes = null;
    },
    [fetchAdsorbatesWithIupacNotation.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbatesWithIupacNotation = action.payload;
    },
    [fetchAdsorbatesWithIupacNotation.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbatesSlice.reducer;
