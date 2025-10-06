import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import api from "../services/api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  //const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getNowPlayingMovies() {
      await api
        .get("movie/now_playing", {
          params: {
            api_key: process.env.REACT_APP_MOVIEDB_API,
            language: "en-US",
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

  function handlePage() {
    setPage((prev) => prev + 1);
  }

  return (
    <div>
      <Header />
      <div className="homepage">
        <h1 className="title">Upcoming movies</h1>
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
                  <Link to={`../movie/${filme.id}`}>
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
          Load more...
        </button>
      </div>
    </div>
  );
}

export default Movies;
