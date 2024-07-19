function fibonacci(n) {
  if (n <= 1) {
    return new Array(n).fill(0);
  }

  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; ++i) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }

  return fibonacciSequence;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of Fibonacci numbers: ", (n) => {
  const num = parseInt(n, 10);
  const fibonacciSequence = fibonacci(num);
  console.log("Fibonacci sequence: " + fibonacciSequence.join(" "));
  rl.close();
});
