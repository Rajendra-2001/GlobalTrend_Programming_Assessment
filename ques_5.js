function removeDuplicates(arr) {
  arr.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      arr[j] = arr[i];
      j++;
    }
  }

  arr.length = j;

  return arr;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput() {
  return new Promise((resolve) => {
    rl.question("Enter the number of elements: ", (size) => {
      const numElements = parseInt(size);
      const arr = [];

      let count = 0;

      function getNextInput() {
        if (count < numElements) {
          rl.question(`Enter element ${count + 1}: `, (num) => {
            arr.push(parseInt(num));
            count++;
            getNextInput();
          });
        } else {
          rl.close();
          const uniqueArr = removeDuplicates(arr);
          console.log("Unique array: " + uniqueArr.join(" "));
        }
      }

      getNextInput();
    });
  });
}

getInput();
