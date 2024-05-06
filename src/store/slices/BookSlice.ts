import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  bookId: string | null;
  authorId: string | null;
}

const initialState: IInitialState = {
  bookId: null,
  authorId: null,
};

const book = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addBook(state: IInitialState, action: void | any) {
      state.bookId = action?.payload;
    },
    addAuthor(state: IInitialState, action: void | any) {
      state.authorId = action?.payload;
    },
  },
});

export default book.reducer;

export const { addAuthor, addBook } = book.actions;
