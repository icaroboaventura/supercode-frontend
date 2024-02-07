//----------------------------------------------------
// Mehrwertsteuer-Rechner
//----------------------------------------------------

//----------------------------------------------------
// text verändern jenach input radio
//----------------------------------------------------

const betragLabel = document.querySelector(".betrag");
const endHeading = document.querySelector(".end-heading");
const changeNetto = () => {
  betragLabel.innerHTML =
    "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>";
  endHeading.innerHTML = "Bruttobetrag (Endpreis)";
};
const changeBrutto = () => {
  betragLabel.innerHTML =
    "Bruttobetrag (Preis mit Mehrwertsteuer) in Euro<span>*</span>";
  endHeading.innerHTML = "Nettobetrag (Endpreis)";
};

//----------------------------------------------------
// Hauptfunktion - BERECHNEN
//----------------------------------------------------

const rechner = () => {
  const mehrwertsteuer = document.querySelector(
    'input[name="auf-oder-ab"]:checked'
  ).value;
  const steuerSatz = Number(
    document.querySelector('input[name="satz"]:checked').value
  );
  console.log(steuerSatz);
  const betrag = Number(document.querySelector("#betrag").value);
  const mwBetrag = document.querySelector(".mw-betrag");
  const endpreis = document.querySelector(".endpreis");

  if (mehrwertsteuer === "aufschlagen") {
    mwBetrag.innerHTML = `${(betrag * steuerSatz).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag + betrag * steuerSatz).toFixed(2)} €`;
  } else {
    mwBetrag.innerHTML = `${(betrag - betrag / (steuerSatz + 1)).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag / (steuerSatz + 1)).toFixed(2)}  €`;
  }
};
