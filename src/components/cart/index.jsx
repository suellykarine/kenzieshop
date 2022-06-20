import { useSelector } from "react-redux";
import Card from "../card";
import "./style.css";
import CartTotal from "../cartTotal";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      <span className="titulo-cart"> Meu Carrinho</span>
      <div className="container">
        <div className="total">
          <h4 className="valor-total">
            Valor total da Compra: <CartTotal />
          </h4>
          <button className="btn-finalizar ">Finalizar compra</button>
        </div>
      </div>

      <div className="testecarrinho">
        <ul className="ul-carrinho">
          {cart.map((produto, index) => {
            return (
              <li key={index}>
                <Card product={produto} index={index} btnRemover />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
