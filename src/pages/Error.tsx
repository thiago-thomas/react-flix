import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      <Link to="/listafilmes">Ir para a listagem de filmes</Link>
    </div>
  );
}
