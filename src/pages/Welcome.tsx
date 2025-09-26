import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Bem-vindo(a) ao <span className="reactflix">ReactFlix</span>
      </h1>
      <h2>
        Um sistema que você pode criar uma lista dos seus filmes favoritos! :D
      </h2>
      <Link to="/listafilmes">Entrar no ReactFlix</Link>
    </div>
  );
}
