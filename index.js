function loop1() {
  let fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}
function loop2() {
  let i = 0;
  let fruits = ["apple", "banana", "cherry"];
  while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
  }
}

const loop3 = () => {
  for (let i = 0; i < 3; i++) {
    let array = [];
    let input = prompt("Please enter something here...");
    array.push(input);
    console.log(array);
  }
};

const loop4 = () => {
  let input = prompt("Please enter something here...");
  let array = input.split(",");
  for (let i = 0; i < 3; i++) {
    console.log(array[i].trim());
  }
};

const map1 = () => {
  const numString = prompt("Enter comma separated numbers )e.g. 3,1,9:");
  const numArrayAsStrings = numString.split(",");

  // const numArray = [];

  const numArray = numArrayAsStrings.map(Number); //parses both integers and floats.  if you want just int or float, don't use Number

  // const numArray = numArrayAsStrings.map((s)=> {
  //     return Number(s);
  // });

  console.log(numArray);

  // for (let i = 0; i < numArrayAsStrings.length; i++) {
  //     const num = Number(numArrayAsStrings[i]);
  //     numArray.push(num);
  // }
};

const map2 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((i) => i * 2);
  console.log(doubled);
};

const map3 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const changed = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      changed.push(numbers[i] * 2);
    } else {
      changed.push(numbers[i] * 3);
    }
  }

  console.log(changed);

  for (let i = 0; i < changed.length; i++) {
    console.log(`Original: ${numbers[i]}, changed: ${changed[i]}`);
  }
};
