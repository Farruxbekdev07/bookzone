import { createSlice } from "@reduxjs/toolkit";

interface IState {
  bookId?: string | null;
  authorId?: string | null;
}

const initialState: IState = {
  bookId: null,
  authorId: null,
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook(state: IState, action: void | any) {
      state.bookId = action?.payload;
    },
    addAuthor(state: IState, action: void | any) {
      state.authorId = action?.payload;
    },
  },
});

export default book.reducer;

export const { addAuthor, addBook } = book.actions;
