const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([...state, action.payload]);
    case LOAD_BOOKS:
      return (action.payload);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default booksReducer;
