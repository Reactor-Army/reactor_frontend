import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProcesses} from "../services/processes";

export const fetchProcesses = createAsyncThunk("fetchProcesses", getProcesses);

const processesSlice = createSlice({
  name: "processes",
  initialState: {
    processes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProcesses.pending]: (state) => {
      state.loading = true;
      state.processes = [];
    },
    [fetchProcesses.fulfilled]: (state, action) => {
      state.loading = false;
      state.processes = action.payload;
    },
    [fetchProcesses.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default processesSlice.reducer;
