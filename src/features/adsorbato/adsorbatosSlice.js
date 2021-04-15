import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let url = "https://reactor-a1.herokuapp.com/adsorbato";
export const fetchAdsorbatos = createAsyncThunk("fetchAdsorbatos", async () => {
    const response = await fetch(url,{
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': "application/json"
        }
    });
    const adsorbatos = await response.json();
    return adsorbatos;
  });


const adsorbatosSlice = createSlice({
  name: "adsorbatos",
  initialState: {
    adsorbatos: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAdsorbatos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAdsorbatos.fulfilled]: (state, action) => {
      state.loading = false;
      state.adsorbatos = [...state.adsorbatos, ...action.payload];
    },
    [fetchAdsorbatos.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default adsorbatosSlice.reducer;
