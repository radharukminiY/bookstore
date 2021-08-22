const initialShoppingCart = {
  cartItems: [],
  orderTotal: 0,
};

const updateCartItem = (cartItem, book, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = cartItem ?? {};

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
}

const updateOrder = (state, cartItemId, quantity) => {
  const {bookList, shoppingCart} = state;

  const cartItemIndex = shoppingCart.cartItems.findIndex(item => item.id === cartItemId);
  const cartItem = shoppingCart.cartItems[cartItemIndex];
  const book = bookList.books.find((item) => item.id === cartItemId);

  return {
    orderTotal: shoppingCart.orderTotal + quantity * book.price,
    cartItems: updateCartItems(
      shoppingCart.cartItems,
      updateCartItem(cartItem, book, quantity),
      cartItemIndex,
    ),
  };
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return initialShoppingCart;
  }

  switch (action.type) {

    case 'BOOK_REMOVED_FROM_CART': {
      const cartItemId = action.payload;

      return updateOrder(state, cartItemId, -1);
    }

    case 'ALL_BOOKS_REMOVED_FROM_CART': {
      const cartItemId = action.payload;
      const cartItem = state.shoppingCart.cartItems.find(item => item.id === cartItemId);

      return updateOrder(state, cartItemId, -1 * cartItem.count);
    }

    case 'BOOK_ADDED_TO_CART': {
      const cartItemId = action.payload;

      return updateOrder(state, cartItemId, 1);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
