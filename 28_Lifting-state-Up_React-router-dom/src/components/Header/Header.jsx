import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkLight, setDarkLight] = useState(false);

  const makeDarkLight = () => {
    props.setSuperDark((superDark) => !superDark);
  };

  return (
    <header className={darkLight ? "dark" : ""}>
      <section className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </section>
    </header>
  );
};

export default Header;
