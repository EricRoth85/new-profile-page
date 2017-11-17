## sort

### Points: 8.00

### Description 

The function `sort` accepts an array as an argument and returns a new array where
all elements from the argument array are sorted. 

e.g.

```js
var unsorted = [17, 43, 216, 3, 9, 27], 
    sorted = sort(unsorted);
    // sorted === [3, 9, 17, 27, 43, 216];
```

Tip:

Check the example below:

Use 'greater-than' or 'less-than' operators to compare numbers or strings.

```js
'ab' > 'aaaa' // ==> true;
```
JavaScript compares strings by each individual character and where it is positioned in the alphabet. In the example above, JavaScript compares the `a` in the first string and the second string. Both are in the same position (0th), so it moves to the next character in each string. `b` comes after `a`, `b` is at the 1st index, since the index is of `b` is greater than the index of `a`, the string `ab` is greater than `aaaa`.  Keep this in mind when comparing strings. You don't have to do anything special for strings vs numbers.
