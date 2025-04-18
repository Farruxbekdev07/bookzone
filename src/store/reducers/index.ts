import { combineReducers } from "redux";
import AuthSlice from "../slices/AuthSlice";
import BookSlice from "../slices/BookSlice";
import AccountSlice from "../slices/AccountSlice";

const rootReducers = combineReducers({
  auth: AuthSlice,
  book: BookSlice,
  accounts: AccountSlice,
});
export default rootReducers;
