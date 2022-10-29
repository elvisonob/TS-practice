const apple: number = 5;

let nothing: undefined = undefined;

let colors: boolean[] = [false];

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

class Car {}

const car: Car = new Car();

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
//console.log(coordinates);

const jsonStringify = { x: 20, y: 30 };
const newUpdate = JSON.stringify(jsonStringify);

//console.log(newUpdate);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log(numberAboveZero);
