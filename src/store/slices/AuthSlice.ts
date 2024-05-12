import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces";

interface IState {
  token: string;
  user: IUserData | null;
  words: { [key: string]: string };
  expireDate: number | null;
}

const initialState: IState = {
  token: "",
  user: null,
  words: {},
  expireDate: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: IState, action: void | any) {
      state.token = action?.payload?.token;
      state.user = action?.payload?.user;
    },
    logout(state: IState) {
      state.token = "";
      state.user = null;
    },
    setUser(state: IState, action: void | any) {
      state.user = action?.payload;
    },
    setDate(state: IState, action: void | any) {
      state.expireDate = action?.payload;
    },
  },
});

export default auth.reducer;

export const { login, logout, setUser, setDate } = auth.actions;
