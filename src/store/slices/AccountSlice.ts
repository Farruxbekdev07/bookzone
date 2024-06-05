import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces";

interface IState {
  accounts: Array<IUserData>;
}

const initialState: IState = {
  accounts: [],
};

const accounts = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts(state: IState, action: void | any) {
      state.accounts = [...state.accounts, action?.payload];
    },
    logoutAccounts(state: IState) {
      state.accounts = [];
    },
  },
});

export default accounts.reducer;

export const { setAccounts, logoutAccounts } = accounts.actions;
