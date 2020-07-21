import { combineReducers } from 'redux';
import books from './BooksReducer';
import auth from './AuthReducer';

const rootReducer = combineReducers({
    books,
    auth,
});

export default rootReducer;
