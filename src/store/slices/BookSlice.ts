import { createSlice } from "@reduxjs/toolkit";

interface IState {
  bookId?: string | null;
  authorId?: string | null;
  key?: string | any;
}

const initialState: IState = {
  bookId: null,
  authorId: null,
  key: null,
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
    addKey(state: IState, action: void | any) {
      state.key = action?.payload;
    },
  },
});

export default book.reducer;

export const { addAuthor, addBook, addKey } = book.actions;
