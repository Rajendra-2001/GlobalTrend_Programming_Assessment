const readline = require("readline");

function evaluateExpression(expression) {
  let result = 0;
  let number = 0;
  let op = "+";

  for (let i = 0; i < expression.length; ++i) {
    const ch = expression[i];

    if (/\d/.test(ch)) {
      number = number * 10 + (ch - "0");
    }

    if ((!/\d/.test(ch) && !/\s/.test(ch)) || i === expression.length - 1) {
      if (op === "+") {
        result += number;
      } else if (op === "-") {
        result -= number;
      }
      op = ch;
      number = 0;
    }
  }

  return result;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter a simple arithmetic expression (only addition and subtraction): ",
    (expression) => {
      const result = evaluateExpression(expression);
      console.log("The result is: " + result);
      rl.close();
    }
  );
}

main();
