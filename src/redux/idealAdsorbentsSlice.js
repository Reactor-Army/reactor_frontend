import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchIdealAdsorbents} from "../services/idealAdsorbents";

export const fetchIdealAdsorbents = (adsorbatesIds) => {
  const callback = () => searchIdealAdsorbents(adsorbatesIds);
  return createAsyncThunk("fetchIdealAdsorbents", callback);
};

const idealAdsorbentsSlice = createSlice({
  name: "idealAdsorbents",
  initialState: {
    idealAdsorbents: [],
    loading: false,
  },
  reducers: {},
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
