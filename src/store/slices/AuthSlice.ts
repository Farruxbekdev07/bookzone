import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces";

interface IState {
  token: string;
  user: IUserData | null;
  words: { [key: string]: string };
}

const initialState: IState = {
  token: "",
  user: null,
  words: {},
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
  },
});

export default auth.reducer;

export const { login, logout, setUser } = auth.actions;
