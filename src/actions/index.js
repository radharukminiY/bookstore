const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksError = (err) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: err,
  }
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(books => dispatch(booksLoaded(books)))
    .catch(err => dispatch(booksError(err)));
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  }
};

const allBookRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId,
  }
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId,
  }
};

export {
  fetchBooks,
  bookAddedToCart,
  allBookRemovedFromCart,
  bookRemovedFromCart,
};
