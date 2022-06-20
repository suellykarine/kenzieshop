import { CART_REMOVE, CART_ADD } from "./actionTypes";

export const addToCart = (product) => ({ type: CART_ADD, product });

export const removeFromCart = (lista) => ({ type: CART_REMOVE, lista });