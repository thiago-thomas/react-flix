import { useEffect, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Favmovies from "../components/Favmovies";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

function Bookmarks() {

  /*
  function deleteMovie(e: MouseEvent<HTMLButtonElement>) {
    const movieId = Number(e.currentTarget.value);
    const newListMovies = favMovies.filter((mv) => mv.id !== movieId);
    setFavMovies(newListMovies);
    localStorage.setItem("reactflix", JSON.stringify(newListMovies));
    toast.success("Filme excluido com sucesso!");
  }
  */

  return (
    <div>
      <Header />
      <h1 className="title">Meus Filmes</h1>
      <Favmovies />
    </div>
  );
}

export default Bookmarks;
