import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAllFavMovies } from "../features/favmovies/favmoviesSlice";

export default function Favmovies() {
  const favMovies = useAppSelector(selectAllFavMovies);

  return (
    <div className="listaFilmes bookmarks">
      {favMovies.length === 0 && <h3>Lista de filmes vazia!</h3>}
      {favMovies.map((filme) => {
        return (
          <article key={filme.id}>
            <div className="inline">
              <div className="wrap">
                <h3 className="titulo">{filme.title}</h3>
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
              alt={filme.title}
              className="img"
            />
            <div className="bookmarks-options">
              <Link to={`/filme/${filme.id}`} className="details">
                Detalhes
              </Link>
              <button
                className="delete-fav"
              >
                Excluir
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
