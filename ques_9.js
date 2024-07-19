function filterEven(arr) {
  return arr.filter((num) => num % 2 !== 0); // Keep only odd numbers
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of array: ", (size) => {
  const n = parseInt(size, 10);
  const arr = [];

  let count = 0;

  function getNextInput() {
    if (count < n) {
      rl.question(`Enter element ${count + 1}: `, (element) => {
        arr.push(parseInt(element, 10));
        count++;
        getNextInput();
      });
    } else {
      const result = filterEven(arr);
      console.log("Original array:", arr.join(" "));
      console.log("Filtered array (only odd numbers):", result.join(" "));
      rl.close();
    }
  }

  getNextInput();
});
