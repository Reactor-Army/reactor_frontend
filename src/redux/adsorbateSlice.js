import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbate} from "../services/adsorbates";

export const fetchAdsorbate = createAsyncThunk("fetchAdsorbate", getAdsorbate);

const adsorbateDetailSlice = createSlice({
  name: "adsorbate",
  initialState: {
    adsorbate: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbate.pending]: (state) => {
      state.loading = true;
      state.adsorbate = null;
    },
    [fetchAdsorbate.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbate = action.payload;
    },
    [fetchAdsorbate.rejected]: (state) => {
      state.loading = false;
      state.adsorbate = null;
    },
  },
});

export default adsorbateDetailSlice.reducer;
