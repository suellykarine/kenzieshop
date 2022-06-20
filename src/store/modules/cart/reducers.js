import { CART_ADD, CART_REMOVE } from "./actionTypes";

const cartReducers = (
    state = JSON.parse(localStorage.getItem("cart")) || [],
    action
) => {
    switch (action.type) {
        case CART_ADD:
            const { product } = action;
            return [...state, product];

        case CART_REMOVE:
            const { lista } = action;

            return lista;
        default:
            return state;
    }
};

export default cartReducers;