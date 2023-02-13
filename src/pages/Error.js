import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      <Link to="/">Ir para a pagina principal</Link>
    </div>
  );
}

export default Error;
