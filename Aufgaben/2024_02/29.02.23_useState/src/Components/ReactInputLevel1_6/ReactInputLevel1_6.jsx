import { useState } from "react";
import "./ReactInputLevel1_6.css";

const ReactCounterLevel1_6 = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <form className="form-1-6">
        <input type="text" onChange={(event) => setVorname(event.target.value)} value={vorname} />
        <input type="text" onChange={(event) => setNachname(event.target.value)} value={nachname} />
        <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
      </form>
      <p>Vorname: {vorname}</p>
      <p>Nachname: {nachname}</p>
      <p>Email: {email}</p>
    </>
  );
};

export default ReactCounterLevel1_6;
