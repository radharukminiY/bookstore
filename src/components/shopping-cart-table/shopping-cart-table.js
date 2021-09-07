import React from "react";
import {connect} from "react-redux";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart,
} from "../../actions";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <tr key={id}>
        <th scope="row">{idx + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button className="btn btn-success mr-2"
                  onClick={() => onIncrease(id)}>
            <FontAwesomeIcon icon={faPlus}/>
          </button>
          <button className="btn btn-danger mr-2"
                  onClick={() => onDecrease(id)} >
            <FontAwesomeIcon icon={faMinus}/>
          </button>
          <button className="btn btn-warning mr-2"
                  onClick={() => onDelete(id)}>
            <FontAwesomeIcon icon={faTrashAlt} color="white"/>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {
          items.map(renderRow)
        }
        </tbody>
      </table>
      <h3>Total: {total}$</h3>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
