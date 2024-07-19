class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  constructor(size = 10) {
    this.map = new Map();
  }

  put(key, value) {
    const kv = new KeyValuePair(key, value);
    this.map.set(key, kv);
  }

  get(key) {
    if (this.map.has(key)) {
      return this.map.get(key).value;
    } else {
      return "";
    }
  }

  remove(key) {
    if (this.map.has(key)) {
      this.map.delete(key);
      return true;
    } else {
      return false;
    }
  }
}

// Usage
const myMap = new HashMap();
myMap.put(1, "apple");
myMap.put(2, "banana");
myMap.put(3, "cherry");

console.log("Value for key 2:", myMap.get(2)); // Output: Value for key 2: banana
console.log("Removed key 1:", myMap.remove(1) ? "Success" : "Fail"); // Output: Removed key 1: Success
console.log("Value for key 1:", myMap.get(1)); // Output: Value for key 1:
