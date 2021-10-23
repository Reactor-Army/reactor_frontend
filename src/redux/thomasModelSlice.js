import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getThomasModelData} from "../services/adsorbates";


export const fetchThomasModelData = createAsyncThunk("fetchThomasModelData", getThomasModelData);

const thomasModelSlice = createSlice({
  name: "thomasModelData",
  initialState: {
    model: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchThomasModelData.pending]: (state) => {
      state.loading = true;
      state.thomasModelData = null;
    },
    [fetchThomasModelData.fulfilled]: (state, action) => {
      state.loading = false;
      state.thomasModelData = action.payload;
    },
    [fetchThomasModelData.rejected]: (state) => {
      state.loading = false;
      state.thomasModelData = null;
    },
  },
});

export default thomasModelSlice.reducer;
