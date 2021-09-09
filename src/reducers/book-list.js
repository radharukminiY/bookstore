const initialBookList = {
  books: [],
  loading: true,
  error: null,
};

const updateBookList = (state, action) => {

  if (state === undefined) {
    return initialBookList;
  }

  const {bookList} = state;

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...bookList,
        books: [],
        loading: true,
        error: null,
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...bookList,
        books: action.payload,
        loading: false,
        error: null,
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...bookList,
        books: [],
        loading: false,
        error: action.payload,
      }
    default:
      return bookList;
  }
};

export default updateBookList;
