import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

const [superDark, setSuperDark] = useState(false);

const Home = () => {
  return (
    <>
      <section className={superDark && "darkGlobal"}>
        <Header setSuperDark={setSuperDark} />
      </section>
    </>
  );
};

export default Home;
