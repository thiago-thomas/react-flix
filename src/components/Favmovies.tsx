import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAllFavMovies, movieDeleted } from "../features/favmovies/favmoviesSlice";
import type { FavMovie } from "../features/favmovies/favmoviesSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../app/hooks";

export default function Favmovies() {
  const favMovies = useAppSelector(selectAllFavMovies);

  const dispatch = useAppDispatch();
  

  function handleDeleteFavMovie(movie: FavMovie)  {
    if (window.confirm(`Deseja realmente excluir o filme "${movie.title}" dos favoritos?`)) {
      dispatch(movieDeleted(movie));
      toast.success("Filme removido com sucesso!");
    } else {
      return
    }
    
  }

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
                onClick={() => handleDeleteFavMovie(filme)}
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
