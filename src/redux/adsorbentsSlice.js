import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  getAdsorbents,
  searchAdsorbents,
  getAdsorbentsWithParticleSize,
} from "../services/adsorbents";

export const fetchAdsorbents = createAsyncThunk(
  "fetchAdsorbents",
  getAdsorbents,
);

export const fetchAdsorbentsWithParticleSize = createAsyncThunk(
  "fetchAdsorbentsWithParticleSize",
  getAdsorbentsWithParticleSize,
);

export const createSearchAdsorbentsThunk = (name) => {
  const callback = () => searchAdsorbents(name);
  return createAsyncThunk("fetchAdsorbents", callback);
};

const adsorbentsSlice = createSlice({
  name: "adsorbents",
  initialState: {
    adsorbents: [],
    loading: false,
    adsorbentsWithParticleSize: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbents.pending]: (state) => {
      state.loading = true;
      state.processes = null;
    },
    [fetchAdsorbents.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbents = action.payload;
    },
    [fetchAdsorbents.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAdsorbentsWithParticleSize.pending]: (state) => {
      state.loading = true;
      state.processes = null;
    },
    [fetchAdsorbentsWithParticleSize.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbentsWithParticleSize = action.payload;
    },
    [fetchAdsorbentsWithParticleSize.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbentsSlice.reducer;
