import { useDispatch } from "react-redux";
import "./style.css";

import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";

const Card = ({ product, btnRemover = false, index }) => {
  const dispach = useDispatch();

  const { id, nome, descricao, preco, imagem } = product;

  return (
    <div className="testando">
      <div className="card">
        <img src={imagem} alt="imagem" />
        <div className="teste-texto">
          <div className="div-nome">
            <h3>{nome}</h3>
          </div>
          <div className="div-comentario">
            <p> {descricao}</p>
          </div>
          <p className="help-text"> A partir de:</p>
          <div className="div-preco">
            <h6>
              {preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              <span> Em até 10 x</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="div-btn">
        {btnRemover ? (
          <div className="btn-1">
            <button
              className="btn-remover"
              onClick={() => dispach(removeFromCartThunk(index))}
            >
              Remover do carrinho {index}
            </button>
          </div>
        ) : (
          <button
            className="btn-add"
            onClick={() => dispach(addToCartThunk(product))}
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
