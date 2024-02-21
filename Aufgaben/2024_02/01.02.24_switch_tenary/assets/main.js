function checkBundesLand() {
  const inputLand = document.body.querySelector("#land").value;
  const outputInfo = document.body.querySelector(".info-bundes");
  switch (inputLand) {
    case "Baden-Württemberg":
      outputInfo.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Bayern":
      outputInfo.innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      outputInfo.innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "Brandenburg":
      outputInfo.innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "Bremen":
      outputInfo.innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      outputInfo.innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "Hessen":
      outputInfo.innerHTML =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "Mecklenburg-Vorpommern":
      outputInfo.innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "Niedersachsen":
      outputInfo.innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      outputInfo.innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Saarland":
      outputInfo.innerHTML =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "Sachsen":
      outputInfo.innerHTML =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "Sachsen-Anhalt":
      outputInfo.innerHTML =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "Schleswig-Holstein":
      outputInfo.innerHTML =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "Thüringen":
      outputInfo.innerHTML =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
    default:
      outputInfo.innerHTML =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
      break;
  }
}

function showtxt() {
  const inputSelect = document.body.querySelector("#mylist").value;
  const outputName = document.body.querySelector("#name");
  const outputMasse = document.body.querySelector("#masse");
  switch (inputSelect) {
    case "0":
      outputName.innerHTML = "<b>Brief und Postkarte</b>";
      outputMasse.innerHTML = "L: 10 - 23,5 cm B: 7 - 12 5 cm H: bis 1 cm";
      break;
    case "1":
      outputName.innerHTML = "<b>DHL Paket 2 kg</b>";
      outputMasse.innerHTML = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      outputName.innerHTML = "<b>DHL Paket 5 kg</b>";
      outputMasse.innerHTML = "bis 120 x 60 x 60 cm";
      break;
    case "3":
      outputName.innerHTML = "<b>DHL Paket 10 kg</b>";
      outputMasse.innerHTML = "bis 120 x 60 x 60 cm";
      break;
    default:
      outputName.innerHTML = "<b>Extra große Größe</b>";
      outputMasse.innerHTML = "";
      break;
  }
}

function checkAge() {
  const inputAge = document.body.querySelector("#age-input").value;
  const outputAge = document.body.querySelector(".age-output");
  inputAge >= 18
    ? (outputAge.innerHTML = "Above 18")
    : (outputAge.innerHTML = "Under 18");
}
