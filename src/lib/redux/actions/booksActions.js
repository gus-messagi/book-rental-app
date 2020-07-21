import { LOAD_BOOKS, SEARCH_BOOKS } from '../../constants/books';

export const loadBooks = (payload) => (dispatch) => {
    dispatch({
        type: LOAD_BOOKS,
        payload,
    });
};

export const searchBooks = (payload) => (dispatch) => {
    dispatch({
        type: SEARCH_BOOKS,
        payload,
    });
};
