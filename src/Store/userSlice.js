import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    username: "",
    uid: "",
    profilePicture: null,
    point: 0,
  },
  reducers: {
    login: (state, action) => {
      const userData = action.payload;
      state.isLogin = true;
      state.username = userData.username;
      state.uid = userData.uid;
      state.profilePicture = userData.profilePictureUrl;
      state.point = userData.point;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.username = "";
      state.uid = "";
      state.profilePicture = null;
      state.point = 0;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
