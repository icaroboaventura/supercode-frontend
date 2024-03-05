import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <div>
        <h1>Go to Shop</h1>
        <Link to="/Shop">Shop</Link>
      </div>
    </section>
  );
};

export default Welcome;
