import Cart from "../../components/cart";
import { AiFillHome } from "react-icons/ai";
import "./style.css";
import { useHistory } from "react-router-dom";

import { GiAirplaneDeparture, GiTicket } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";

const PageCart = () => {
  const history = useHistory();
  const btnHome = () => {
    history.push("/");
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
        <img className="logo2" src="./kenzielogo.png" alt="logo" />
      </nav>
      <hr />
      <div>
        <div className="div-home-icon">
          <p className="p-cart">Home</p>
          <AiFillHome onClick={btnHome} size={30} color={"blue"} />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default PageCart;
