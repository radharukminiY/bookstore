import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app";

import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";

const bookstoreService = new BookstoreService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'));
