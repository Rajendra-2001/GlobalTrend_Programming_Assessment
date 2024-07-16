def title_case(text):
  words = text.lower().split()
  
  for i in range(len(words)):
    words[i] = words[i][0].upper() + words[i][1:]

  title_case_text = " ".join(words)

  return title_case_text


user_input = input("Enter a string: ")

print(title_case(user_input))
