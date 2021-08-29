import React from "react";
import BookListItem from "../book-list-item";

const BookList = ({books, onAddedToCart}) => {
  return (
    <div className="d-flex mb-3">
      {
        books.map(({id, title, author, price, imgUrl}) => {
          return <BookListItem
            key={id}
            id={id}
            title={title}
            author={author}
            price={price}
            imgUrl={imgUrl}
            onAddedToCart={onAddedToCart}
          />
        })
      }
    </div>
  );
}

export default BookList;
