import React from "react";
import {Route} from 'react-router-dom';
import Header from "../header";
import {HomePage, CartPage} from "../pages";


const App = () => {
  return (
    <div className="container">
      <Header />

      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} exact />
    </div>
  );
};

export default App;
