import { combineReducers } from "redux";
import AuthSlice from "../slices/AuthSlice";
import BookSlice from "../slices/BookSlice";

const rootReducers = combineReducers({
  auth: AuthSlice,
  book: BookSlice,
});
export default rootReducers;
