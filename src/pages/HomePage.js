import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="Home-page">
      <h2 className="game-mode">
        <Link to="/apexdle/classic" style={{ textDecoration: 'none', color: 'inherit' }}>
          Classic
        </Link>
      </h2>
    </div>
  );
}

export default HomePage;