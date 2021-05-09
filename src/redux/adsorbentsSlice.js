import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbents, searchAdsorbents} from "../services/adsorbents";

export const fetchAdsorbents = createAsyncThunk(
  "fetchAdsorbents",
  getAdsorbents,
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
  },
});

export default adsorbentsSlice.reducer;
