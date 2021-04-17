import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let url = "https://reactor-a1.herokuapp.com/adsorbato";
export const fetchAdsorbatos = createAsyncThunk("fetchAdsorbatos", async () => {
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

const adsorbatosSlice = createSlice({
  name: "adsorbatos",
  initialState: {
    adsorbatos: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbatos.pending]: (state) => {
      state.loading = true;
    },
    [fetchAdsorbatos.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbatos = [...state.adsorbatos, ...action.payload];
    },
    [fetchAdsorbatos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default adsorbatosSlice.reducer;
