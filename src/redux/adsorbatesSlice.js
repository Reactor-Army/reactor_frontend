import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbates, searchAdsorbates} from "../services/adsorbates";

export const fetchAdsorbates = createAsyncThunk(
  "fetchAdsorbates",
  getAdsorbates,
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
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbates.pending]: (state) => {
      state.loading = true;
      state.adsorbates = [];
    },
    [fetchAdsorbates.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbates = action.payload;
    },
    [fetchAdsorbates.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbatesSlice.reducer;
