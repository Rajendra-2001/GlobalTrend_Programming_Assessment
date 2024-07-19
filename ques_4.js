function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    map.set(a[i], (map.get(a[i]) || 0) + 1);
  }

  for (let i = 0; i < b.length; i++) {
    if (map.has(b[i])) {
      map.set(b[i], map.get(b[i]) - 1);
    } else {
      return false;
    }
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first string: ", (str1) => {
  rl.question("Enter the second string: ", (str2) => {
    if (isAnagram(str1, str2)) {
      console.log("True");
    } else {
      console.log("False");
    }
    rl.close();
  });
});
