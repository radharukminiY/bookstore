import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Header = ({numItems = 0, total = 0}) => {
  return (
    <header className="d-flex justify-content-between mb-2 mt-2">
      <Link to="/"><h2>Book-Store</h2></Link>
      <Link className="text-dark" to="/cart">
        <div>
          <FontAwesomeIcon icon={faShoppingCart} size="1x" color="Teal" className="mr-2"/>
          {numItems} items. ({total}$)
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.shoppingCart.orderTotal,
    numItems: state.shoppingCart.cartItems.reduce((acc, item) => acc + item.count, 0),
  }
}

export default connect(mapStateToProps)(Header);
