#include <iostream>
#include <vector>
using namespace std;

vector<int> filtereven(vector<int> arr, int n)
{
  vector<int> result;
  for (auto i : arr)
  {
    if (i % 2 != 0) // Checking for odd numbers (filtering out even numbers)
      result.push_back(i);
  }
  return result;
}

int main()
{
  int n;
  cout << "Enter the size of array: ";
  cin >> n;
  vector<int> arr(n); // Resize the vector to size n

  cout << "Enter the elements in the array: ";
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  cout << "Original array: ";
  for (int i = 0; i < n; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;

  vector<int> result = filtereven(arr, n);

  cout << "Filtered array (only odd numbers): ";
  for (auto i : result)
  {
    cout << i << " ";
  }
  cout << endl;

  return 0;
}
