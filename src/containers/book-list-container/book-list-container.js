import React from "react";
import {connect} from "react-redux";
import {compose} from "../../utils";
import withBookstoreService from "../../components/hoc/bookstore-service";
import {fetchBooks, bookAddedToCart} from "../../actions";
import ErrorIndicator from "../../components/error-indicator";
import Spinner from "../../components/spinner";
import BookList from "../../components/book-list";
import {bindActionCreators} from "redux";

class BookListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      books,
      loading,
      error,
      onAddedToCart
    } = this.props;

    if(error) {
      return <ErrorIndicator />
    }

    if(loading) {
      return <Spinner />
    }
    return (
      <BookList books={books} onAddedToCart={onAddedToCart}/>
    );
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {
    books,
    loading,
    error,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart,
  }, dispatch);
}

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
