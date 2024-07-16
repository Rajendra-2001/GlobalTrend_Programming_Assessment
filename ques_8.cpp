#include <iostream>
#include <vector>
#include <unordered_map> // Use std::unordered_map for efficient hashing

using namespace std;

// Define a struct to represent a key-value pair
struct KeyValuePair
{
  int key;
  string value;
};

class HashMap
{
public:
  HashMap(int size = 10) : map_(size) {}

  void put(int key, const string &value)
  {

    KeyValuePair kv = {key, value};

    map_[key] = kv;
  }

  string get(int key)
  {

    if (map_.count(key) > 0)
    {
      return map_[key].value;
    }
    else
    {
      return "";
    }
  }

  bool remove(int key)
  {

    if (map_.count(key) > 0)
    {

      map_.erase(key);
      return true;
    }
    else
    {
      return false;
    }
  }

private:
  unordered_map<int, KeyValuePair> map_;
};

int main()
{
  HashMap myMap;
  myMap.put(1, "apple");
  myMap.put(2, "banana");
  myMap.put(3, "cherry");

  cout << "Value for key 2: " << myMap.get(2) << endl;
  cout << "Removed key 1: " << (myMap.remove(1) ? "Success" : "Fail") << endl;
  cout << "Value for key 1: " << myMap.get(1) << endl;
  return 0;
}
