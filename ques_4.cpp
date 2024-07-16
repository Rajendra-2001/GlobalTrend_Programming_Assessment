#include <bits/stdc++.h>
using namespace std;

bool isAnagram(string a, string b)
{
  if (a.length() != b.length())
  {
    return false;
  }
  unordered_map<char, int> Map;
  for (int i = 0; i < a.length(); i++)
  {
    Map[a[i]]++;
  }
  for (int i = 0; i < b.length(); i++)
  {

    if (Map.find(b[i]) != Map.end())
    {

      Map[b[i]] -= 1;
    }
    else
    {
      return false;
    }
  }
  for (auto items : Map)
  {
    if (items.second != 0)
    {
      return false;
    }
  }
  return true;
}

int main()
{
  string str1;
  string str2;
  cout << "Enter the first string: ";
  cin >> str1;
  cout << "Enter the Second string: ";
  cin >> str2;

  if (isAnagram(str1, str2))
    cout << "True"
         << endl;
  else
    cout << "False"
         << endl;
}