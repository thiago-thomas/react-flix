import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import api from "../services/api";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import type { FavMovie } from "../features/favmovies/favmoviesSlice";
import { movieAdded, existFavMovieById } from "../features/favmovies/favmoviesSlice";


interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

function Movie() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const hasMovie = useAppSelector((state) => existFavMovieById(state, Number(id)));
  
  useEffect(() => {
    async function getMovieByID() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_MOVIEDB_API,
            language: "en-US",
          },
        })
        .then((response) => {
          setMovie(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/movielist", { replace: true });
        });
    }
    getMovieByID();

    return () => {
      console.log("Elemento Filme Desmontado!");
    };
  }, [id, navigate]);
  
  function saveMovie() {
    if (!movie) return;

    const newFavMovie: FavMovie = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path
    }
    
    if (!hasMovie) {
      dispatch(movieAdded(newFavMovie));
      toast.success("Movie saved successfully!");
    } else {
      toast.warn("This movie is already in the list!");
      return;
    }
  }

  if (loading || !movie) {
    return (
      <div className="loading">
        <h1>Loading Movies...</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="listaFilmes detail">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="img"
          alt={movie.title}
        />
        <h3>Synopsis</h3>
        <p>{movie.overview}</p>
        <h4>Rating: {movie.vote_average.toFixed(1)}</h4>
        <button onClick={saveMovie} className="save-btn">Save Movie</button>
      </div>
    </div>
  );
}

export default Movie;
