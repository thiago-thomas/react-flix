import { Link } from "react-router-dom";
import "../style.css";

import { useAppSelector } from "../app/hooks";
import { selectCountFavMovies } from "../features/favmovies/favmoviesSlice";


export default function Header(){
  const movieCount = useAppSelector(selectCountFavMovies);

  return (
    <div className="menu">
      <Link className="logo" to="/movielist">
        RF
      </Link>
      <Link className="favs" to="/favorites">
        <span className="favmovies-counter-badge">{movieCount}</span>
        Favorite movies
      </Link>
    </div>
  );
};

