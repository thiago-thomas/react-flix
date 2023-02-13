import { Link } from "react-router-dom";
import "../react-flix.css";

function Header() {
  return (
    <div className="menu">
      <Link className="logo" to="/">
        ReactFlix
      </Link>
      <Link className="favs" to="/favoritos">
        Meus Filmes
      </Link>
    </div>
  );
}

export default Header;
