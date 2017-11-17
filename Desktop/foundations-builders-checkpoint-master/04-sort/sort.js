function sort(arr) {
    var sorted = [];
    if(typeof arr[0] === 'string') {
      sorted = arr.sort('');
      return sorted;
    } else {
        for(var i = 0; i < arr.length; i++) {
          var currentNum = arr[i];
          var j = i - 1;
          while (j >= 0 && arr[j] > currentNum) {
            arr[j + 1] = arr[j];
            j--;
          }
        arr[j + 1] = currentNum;
      }
  return arr;
      }
  }