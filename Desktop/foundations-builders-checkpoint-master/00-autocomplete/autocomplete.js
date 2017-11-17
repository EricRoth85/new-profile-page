function autocomplete(str, arr) {
    var finalWords = [];
    
    for(var j = 0; j < arr.length; j++) {
      for(var i = 0; i < str.length; i++) {
        if(str.length === 1 && arr[j][i] === str[i]) {
          finalWords.push(arr[j])
        }
        else if (arr[j][i] === str[i] && arr[j][i+1] === str[i+1]){
          finalWords.push(arr[j])
        }
      }
    }
    return finalWords
  }