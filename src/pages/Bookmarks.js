import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";

function Bookmarks() {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("reactflix");
    setFavMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(e) {
    const movieId = Number(e.target.value);
    const newListMovies = favMovies.filter((mv) => mv.id !== movieId);
    setFavMovies(newListMovies);
    localStorage.setItem("reactflix", JSON.stringify(newListMovies));
    toast.success("Filme excluido com sucesso!");
  }

  return (
    <div>
      <Header />
      <h1 className="title">Meus Filmes</h1>
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
                  value={filme.id}
                  className="delete-fav"
                  onClick={deleteMovie}
                >
                  Excluir
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmarks;
