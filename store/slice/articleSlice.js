import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rc73BK4BdGc19ExtrM7EiKAUvdyvMeJP`
    )
    .then((response) => response.data.results);
});

export const articleSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
  },
});

export default articleSlice.reducer;
