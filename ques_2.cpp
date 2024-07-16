#include <iostream>
#include <string>

using namespace std;

int evaluateExpression(const string &expression)
{
  int result = 0;
  int number = 0;
  char op = '+';
  for (size_t i = 0; i < expression.size(); ++i)
  {
    char ch = expression[i];
    if (isdigit(ch))
    {
      number = number * 10 + (ch - '0');
    }
    if (!isdigit(ch) && !isspace(ch) || i == expression.size() - 1)
    {
      if (op == '+')
      {
        result += number;
      }
      else if (op == '-')
      {
        result -= number;
      }
      op = ch;
      number = 0;
    }
  }
  return result;
}

int main()
{
  string expression;
  cout << "Enter a simple arithmetic expression (only addition and subtraction): ";
  getline(cin, expression);

  int result = evaluateExpression(expression);
  cout << "The result is: " << result << endl;

  return 0;
}
