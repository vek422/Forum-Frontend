import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  feedThreads: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setFeedThreads: (state, action) => {
      state.feedThreads = state.feedThreads.concat(action.payload.threads);
    },
  },
});

export const { setMode, setLogout, setLogin, setFeedThreads } =
  authSlice.actions;
export default authSlice.reducer;
