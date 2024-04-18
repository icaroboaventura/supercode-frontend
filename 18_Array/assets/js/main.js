// ------------------------------------------------------------
// Array-Level-1_1 array erstellen
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_1--------", "color:red");

const namesOne = ["Bruce", "Wayne", "Superreich"];
const namesTwo = ["Farid", "Christian", "Sergio"];
const namesThree = ["Burger", "Sushi", "Käsebällchen"];

console.log(namesOne, namesTwo, namesThree);

// ------------------------------------------------------------
// Array-Level-1_2 index
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_2--------", "color:red");

const names = [namesOne, namesTwo, namesThree];
for (i = 0; i < names.length; i++) {
  for (j = 0; j < names[i].length; j++) {
    console.log(names[i][j]);
  }
}

// ------------------------------------------------------------
// Array-Level-1_3 length
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_3--------", "color:red");

console.log(`Länge von [${namesOne}] ist gleich ${namesOne.length}`);

// ------------------------------------------------------------
// Array-Level-1_4 push()
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_4--------", "color:red");

namesOne.push("Batman", "Gotham City");
console.log(namesOne);

namesTwo.push("Marzio", "Magda");
console.log(namesTwo);

namesThree.push("Pizza", "Currywurst");
console.log(namesThree);

// ------------------------------------------------------------
// Array-Level-1_5 pop()
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_5--------", "color:red");

namesOne.pop();
console.log(namesOne);

namesTwo.pop();
console.log(namesTwo);

namesThree.pop();
console.log(namesThree);

// ------------------------------------------------------------
// Array-Level-1_7 unshift()
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_7--------", "color:red");

namesTwo.unshift("Julia", "Lea");
console.log(namesTwo);

namesThree.unshift("Pommes", "Döner");
console.log(namesThree);

// ------------------------------------------------------------
// Array-Level-1_9 shift() und pop()
// ------------------------------------------------------------

console.log("%c--------Array-Level-1_9--------", "color:red");

const numbers = [23, 54, 75];
numbers.push(1, 2, 3, 4, 5);
numbers.unshift(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.shift();
numbers.shift();
console.log(numbers);
