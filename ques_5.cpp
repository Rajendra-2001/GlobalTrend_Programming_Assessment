#include <iostream>
#include <vector>
#include <bits/stdc++.h>
using namespace std;

vector<int> removeDuplicates(vector<int> &arr)
{

  sort(arr.begin(), arr.end());

  int j = 0;
  for (int i = 0; i < arr.size(); i++)
  {

    if (i == 0 || arr[i] != arr[i - 1])
    {
      arr[j] = arr[i];
      j++;
    }
  }

  arr.resize(j);
  return arr;
}

int main()
{
  vector<int> arr;
  int size;

  cout << "Enter the number of elements: ";
  cin >> size;

  for (int i = 0; i < size; ++i)
  {
    int num;
    cout << "Enter element " << i + 1 << ": ";
    cin >> num;
    arr.push_back(num);
  }

  arr = removeDuplicates(arr);

  cout << "Unique array: ";
  for (int num : arr)
  {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
