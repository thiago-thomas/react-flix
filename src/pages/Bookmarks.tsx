import Header from "../components/Header";
import Favmovies from "../components/Favmovies";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

function Bookmarks() {

  return (
    <div>
      <Header />
      <h1 className="title">My Movies</h1>
      <Favmovies />
    </div>
  );
}

export default Bookmarks;
