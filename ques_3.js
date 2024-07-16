function flatten(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
const nestedArray = [1, [2, 3], 4, [5, [6]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
