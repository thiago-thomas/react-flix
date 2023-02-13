import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Bookmarks />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
