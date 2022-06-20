import "./style.css";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const precoTotal = useSelector(({ cart }) => cart);
  console.log(precoTotal);

  const total = precoTotal.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.preco,
    0
  );
  return (
    <div>
      <span className="valor-total2">
        {total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};

export default CartTotal;
