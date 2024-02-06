//----------------------------------------------------
// Mehrwertsteuer-Rechner
//----------------------------------------------------

const rechner = () => {
  const mehrwertsteuer = document.querySelector(
    'input[name="auf-oder-ab"]:checked'
  ).value;
  const steuerSatz = document.querySelector('input[name="satz"]:checked').value;
  const betrag = Number(document.querySelector("#betrag").value);
  const mwBetrag = document.querySelector(".mw-betrag");
  const endpreis = document.querySelector(".endpreis");

  if (mehrwertsteuer === "aufschlagen" && steuerSatz === "neunzehn") {
    mwBetrag.innerHTML = `${(betrag * 0.19).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag + betrag * 0.19).toFixed(2)} €`;
  } else if (mehrwertsteuer === "aufschlagen" && steuerSatz === "sieben") {
    mwBetrag.innerHTML = `${(betrag * 0.07).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag + betrag * 0.07).toFixed(2)} €`;
  } else if (mehrwertsteuer === "abziehen" && steuerSatz === "neunzehn") {
    mwBetrag.innerHTML = `${(betrag - betrag / 1.19).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag / 1.19).toFixed(2)}  €`;
  } else {
    mwBetrag.innerHTML = `${(betrag - betrag / 1.07).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag / 1.07).toFixed(2)}  €`;
  }
};
