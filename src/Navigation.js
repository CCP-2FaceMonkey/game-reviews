import { Link } from "react-router-dom";
import { useContext } from "react";
import GameContext from "./GameContext";

export default function Navigation() {
  const { user, setUser } = useContext(GameContext);
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link style={{ color: "white" }} to="/">
        home
      </Link>{" "}
      |{" "}
      <Link style={{ color: "white" }} to="/reviews">
        reviews
      </Link>{" "}
      |{" "}
      <Link style={{ color: "white" }} to="/videos">
        videos
      </Link>
    </nav>
  );
}
