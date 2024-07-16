#include <iostream>
#include <vector>

using namespace std;

vector<int> fibonacci(int n)
{
  if (n <= 1)
  {
    return vector<int>(n, 0);
  }

  vector<int> fibonacci_sequence = {0, 1};
  for (int i = 2; i < n; ++i)
  {
    int next_number = fibonacci_sequence[i - 1] + fibonacci_sequence[i - 2];
    fibonacci_sequence.push_back(next_number);
  }

  return fibonacci_sequence;
}

int main()
{
  int n;
  cout << "Enter the number of Fibonacci numbers: ";
  cin >> n;

  vector<int> fibonacci_sequence = fibonacci(n);
  cout << "Fibonacci sequence: ";
  for (int num : fibonacci_sequence)
  {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
