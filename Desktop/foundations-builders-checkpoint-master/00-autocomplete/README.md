# Autocomplete

### Total Points: 4.00

### Description

Have you used a website, text message app, etc that "autocompletes" words you are typing? Let's create a small version of the autocomplete feature.


Create the function `autocomplete` that accepts a string argument and a dictionary array. The string argument represents the characters that are currently typed. The dictionary array is an array with words. The `autocomplete` function creates a new array with words from the dictionary array that match the same pattern as the input string. The pattern matching begins from the start of the word, if the pattern is located within the word it should not be matched.

**Example:**

* **INPUT:** `autocomplete('sh', ['shortening', 'shortbread', 'silver', 'shuttle', 'wash', 'vanish', 'english'])`;
* **OUTPUT** `['shortening', 'shortbread', 'shuttle']`

