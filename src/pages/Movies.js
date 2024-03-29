import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import api from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getNowPlayingMovies() {
      await api
        .get("movie/now_playing", {
          params: {
            api_key: process.env.REACT_APP_MOVIEDB_API,
            language: "pt-BR",
            page: page,
          },
        })
        .then((response) => {
          setMovies((prev) => [...prev, ...response.data.results]);
          console.log(page);
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }

    getNowPlayingMovies();
  }, [page]);

  /*
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }
  */

  function handlePage() {
    setPage((prev) => prev + 1);
  }

  /*
  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando Filmes...</h1>
      </div>
    );
  }
  */

  return (
    <div>
      <Header />
      <div className="homepage">
        <h1 className="title">Filmes em lançamento</h1>
        <div className="listaFilmes">
          {movies.map((filme) => {
            return (
              <article key={filme.id}>
                <div className="inline">
                  <div className="wrap">
                    <h2 className="titulo">{filme.title}</h2>
                  </div>
                </div>
                <div>
                  <Link to={`../filme/${filme.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                      alt={filme.title}
                      className="img"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <button onClick={handlePage} className="maisfilmes">
          Mais Filmes
        </button>
      </div>
    </div>
  );
}

export default Movies;
