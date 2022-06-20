import { useSelector } from "react-redux";
import Card from "../card";
import "./style.css";

const ListaProdutos = () => {
  const listaProdutos = useSelector(({ products }) => products);

  return (
    <div className="divTeste">
      <ul className="ul-card">
        {listaProdutos.map((produto, id) => {
          return (
            <li key={id}>
              <Card product={produto} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaProdutos;
