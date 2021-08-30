import React from "react";
import {BookstoreServiceConsumer} from "../bookstore-service";

const withBookstoreService = (Wrapper) => {
  return class extends React.Component{
    render() {
      return (
        <BookstoreServiceConsumer>
          {
            (c) => {
              return <Wrapper {...this.props} bookstoreService={c}/>
            }
          }
        </BookstoreServiceConsumer>
      );
    }
  }
}

export default withBookstoreService;
