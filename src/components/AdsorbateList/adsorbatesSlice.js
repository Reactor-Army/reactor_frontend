import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let url = "https://reactor-a1.herokuapp.com/adsorbato";
export const fetchAdsorbates = createAsyncThunk("fetchAdsorbates", async () => {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
});

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
