import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Welcome to <span className="reactflix">ReactFlix</span>
      </h1>
      <h2>
        An app where you can create a list of your favorite movies! :D
      </h2>
      <Link to="/movielist">Enter in ReactFlix</Link>
    </div>
  );
}
