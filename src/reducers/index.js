import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import CurrentBooksReducer from './reducer_current_book.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  currentBook: CurrentBooksReducer
});

export default rootReducer;
