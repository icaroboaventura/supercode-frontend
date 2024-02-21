//--------------------------------------------------
// Math-Level-1_2
//--------------------------------------------------

// round a sequence of numbers

const roundNum = () => {
  let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
  for (let i = 0; i < array.length; i++) {
    let roundNumber = `${array[i]} --> ${Math.round(array[i])}`;
    console.log({ roundNumber });
  }
};

roundNum();

//--------------------------------------------------
// Math-Level-1_3
//--------------------------------------------------

// random number

const randomNum = Math.random();
console.log({ randomNum });

// random number 1 -> 10

const randomNum1 = Math.ceil(Math.random() * 10);
console.log({ randomNum1 });

// random number 10 -> 100

const randomNum2 = Math.floor(Math.random() * 90 + 10);
console.log({ randomNum2 });

// ***bonus*** random number in a function Number 1 -> Number 2

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomNum3 = randomBetween(10, 100);
console.log({ randomNum3 });

//--------------------------------------------------
// Math-Level-1_4
//--------------------------------------------------

// find the min value

let minWert = Math.min(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);

console.log({ minWert });

// find the max value

let maxWert = Math.max(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);

console.log({ maxWert });

//--------------------------------------------------
// Math-Level-2_2
//--------------------------------------------------

const guess = (guessNum) => {
  const randomNum = Math.ceil(Math.random() * 10);
  console.log(`Random number = ${randomNum} // Guessed number = ${guessNum}`);
  if (guessNum === randomNum) {
    console.log(`Your guessed the right number!`);
  } else {
    console.log(`Your guessed the wrong number!`);
  }
};

guess(6);
