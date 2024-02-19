//--------------------------------------------------------
// Objekte-Level-1_2
//--------------------------------------------------------

const person = {
  name: "Icaro",
  alter: "24",
};

function sayHallo() {
  alert(`Hallo mein name ist ${person.name} und ich bin ${person.alter} Jahre alt.`);
}

sayHallo();

//--------------------------------------------------------
// Objekte-Level-1_4
//--------------------------------------------------------

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

const addDog = (dogName) => {
  unsereHaustiere[1].names.push(dogName);
  console.log(unsereHaustiere[1].names);
};

addDog("Fido");

//--------------------------------------------------------
// Objekte-Level-1_5
//--------------------------------------------------------

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);

//--------------------------------------------------------
// Objekte-Level-1_7
//--------------------------------------------------------

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

const sectionOne = document.querySelector(".o-l-1-7");

myMusic.forEach((song) => {
  sectionOne.innerHTML += ` 
    <div>
    <h5>${song.title}</h5>
    <h6>${song.artist}</h6>
    <h6>${song.medium}</h6>
    </div>
    <br />
    `;
});
