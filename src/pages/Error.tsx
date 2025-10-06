import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Page not found!</h3>
      <Link to="/movielist">Go to the movie listings</Link>
    </div>
  );
}
