import { Link } from "react-router-dom";
import "../style.css";

import { useAppSelector } from "../app/hooks";
import { selectCountFavMovies } from "../features/favmovies/favmoviesSlice";


export default function Header(){
  const movieCount = useAppSelector(selectCountFavMovies);

  return (
    <div className="menu">
      <Link className="logo" to="/listafilmes">
        RF
      </Link>
      <Link className="favs" to="/favoritos">
        <span className="favmovies-counter-badge">{movieCount}</span>
        Filmes favoritos
      </Link>
    </div>
  );
};

