import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import Error from "./pages/Error";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Welcome from "./pages/Welcome";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/listafilmes" element={<Movies />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Bookmarks />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
