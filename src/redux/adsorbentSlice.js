import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdsorbent} from "../services/adsorbents";

export const fetchAdsorbent = createAsyncThunk("fetchAdsorbent", getAdsorbent);

const adsorbentDetailSlice = createSlice({
  name: "adsorbent",
  initialState: {
    adsorbent: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbent.pending]: (state) => {
      state.loading = true;
      state.adsorbent = null;
    },
    [fetchAdsorbent.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbent = action.payload;
    },
    [fetchAdsorbent.rejected]: (state) => {
      state.loading = false;
      state.adsorbent = null;
    },
  },
});

export default adsorbentDetailSlice.reducer;
