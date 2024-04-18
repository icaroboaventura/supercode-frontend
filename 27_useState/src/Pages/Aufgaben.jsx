import "./Aufgaben.css";
import ReactCounterLevel1_3 from "../Components/ReactCounterLevel1_3/ReactCounterLevel1_3";
import ReactInputLevel1_6 from "../Components/ReactInputLevel1_6/ReactInputLevel1_6";
import ReactstateDayNightchangeLevel2_2 from "../Components/ReactstateDayNightchangeLevel2_2/ReactstateDayNightchangeLevel2_2";
const Aufgaben = () => {
  return (
    <main>
      <section className="level-1_3">
        <h2>React-Counter-Level-1_3</h2>
        <ReactCounterLevel1_3 />
      </section>
      <section className="level-1_6">
        <h2>React-Input-Level-1_6</h2>
        <ReactInputLevel1_6 />
      </section>
      <section className="level-2_2">
        <h2>React-state-Day-Night-change-Level-2_2</h2>
        <ReactstateDayNightchangeLevel2_2 />
      </section>
    </main>
  );
};

export default Aufgaben;
