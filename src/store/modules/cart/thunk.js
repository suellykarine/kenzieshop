import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const lista = JSON.parse(localStorage.getItem("cart")) || [];
    lista.push(product);
    localStorage.setItem("cart", JSON.stringify(lista));
    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (productIndex) => (dispatch, getstore) => {
  const { cart } = getstore();

  const lista = cart.filter((product, index) => productIndex !== index);

  /*const lista = cart.filter(
        (product) => productIndex !== cart.indexOf(product)
      );*/

  localStorage.setItem("cart", JSON.stringify(lista));
  dispatch(removeFromCart(lista));
};
