function titleCase(text) {
  const words = text.toLowerCase().split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  const titleCaseText = words.join(" ");

  return titleCaseText;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (userInput) => {
  console.log(titleCase(userInput));
  rl.close();
});
