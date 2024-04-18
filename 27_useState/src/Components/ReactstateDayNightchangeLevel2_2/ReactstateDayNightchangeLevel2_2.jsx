import { useState } from "react";
import "./ReactstateDayNightchangeLevel2_2.css";

const ReactstateDayNightchangeLevel2_2 = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "state-2-2 dark" : "state-2-2"}>
      <h3>{darkmode ? "Night" : "Day"}</h3>
      <button onClick={() => setDarkmode((darkmode) => !darkmode)}>Change {darkmode ? "Dark" : "Light"}</button>
    </div>
  );
};

export default ReactstateDayNightchangeLevel2_2;
