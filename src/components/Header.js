import { Link } from "react-router-dom";
import "../style.css";

function Header() {
  return (
    <div className="menu">
      <Link className="logo" to="/listafilmes">
        RF
      </Link>
      <Link className="favs" to="/favoritos">
        Meus Filmes
      </Link>
    </div>
  );
}

export default Header;
