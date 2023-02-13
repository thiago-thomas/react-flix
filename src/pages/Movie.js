import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovieByID() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_MOVIEDB_API,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch((err) => {
          navigate("/", { replace: true });
        });
    }
    console.log("teste");
    getMovieByID();

    return () => {
      console.log("Elemento Filme Desmontado!");
    };
  }, [id, navigate]);

  function saveMovie() {
    const myMovieList = localStorage.getItem("reactflix");
    let savedMovie = JSON.parse(myMovieList) || [];
    const hasMovie = savedMovie.some((mv) => mv.id === movie.id);
    if (!hasMovie) {
      savedMovie.push(movie);
      localStorage.setItem("reactflix", JSON.stringify(savedMovie));
      toast.success("Filme salvo com sucesso!");
    } else {
      toast.warn("Esse filme já ta na lista!");
      return;
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando Filmes...</h1>
      </div>
    );
  }

  return (
    <div className="listaFilmes detail">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        className="img"
        alt={movie.title}
      />
      <h3>Sinópse</h3>
      <p>{movie.overview}</p>
      <h4>Nota: {movie.vote_average.toFixed(1).replace(".", ",")}</h4>
      <button onClick={saveMovie}>Salvar Filme</button>
    </div>
  );
}

export default Movie;
