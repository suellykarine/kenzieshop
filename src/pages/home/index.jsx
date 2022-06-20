import ListaProdutos from "../../components/listaProdutos";
import { useHistory } from "react-router-dom";
import "./style.css";
import { TiShoppingCart } from "react-icons/ti";
import { GiAirplaneDeparture, GiTicket } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Home = () => {
  const history = useHistory();
  const btnCart = () => {
    history.push("/cart");
  };

  return (
    <div>
      <div className="div-lista">
        <ul className="ul-lista">
          <li className="lista">
            {" "}
            Aéreos <GiAirplaneDeparture />{" "}
          </li>
          <li className="lista">
            Hospedagens <FaHotel />
          </li>
          <li className="lista">
            Aluguel de carros <MdCarRental />
          </li>
          <li className="lista">
            Passeios <GiTicket />{" "}
          </li>
        </ul>
      </div>
      <nav>
        <img className="logo" src="./kenzielogo.png" alt="logo" />
      </nav>

      <div className="btn">
        <p className="p-btn">Carrinho</p>
        <TiShoppingCart
          onClick={btnCart}
          size={30}
          color={"rgb(243, 95, 159)"}
        />
      </div>
      <div className="div-span">
        <span className="span-home">
          Fale conosco <AiOutlineInstagram /> <AiOutlineFacebook />{" "}
          <AiOutlineWhatsApp />
        </span>
      </div>

      <div className="principal">
        <h1 className="titulo-h1">Destinos mais buscados!</h1>
        <p className="titulo">Escolha sua viagem!</p>
        <ListaProdutos />
      </div>
    </div>
  );
};

export default Home;
