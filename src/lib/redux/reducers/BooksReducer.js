import { LOAD_BOOKS, SEARCH_BOOKS } from '../../constants/books';

const initialValue = {
    filter: [],
    copyValues: [],
};

function BooksReducer(state = initialValue, action) {
    switch (action.type) {
        case LOAD_BOOKS:
            return { filter: action.payload, copyValues: action.payload };
        case SEARCH_BOOKS: {
            const newFilterValues = state.copyValues.filter((book) => (
                book.name.toLowerCase().includes(action.payload.toLowerCase()) && book
            ));
            return { ...state, filter: newFilterValues };
        }
        default:
            return state;
    }
}

export default BooksReducer;
