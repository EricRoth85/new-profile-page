function highestScore(str) {
    var finalCounter = 0;
    var finalWord = "";
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var lowerCase = str.toLowerCase();
    var lowerArr = lowerCase.split(' ')
    for(var i = 0; i < lowerArr.length; i++) {
      var currentCounter = 0;
      for(var j = 0; j < lowerArr[i].length; j++) {
        if(alphabet.includes(lowerArr[i][j])) {
          currentCounter += alphabet.indexOf(lowerArr[i][j])
        }
      }
      if(currentCounter > finalCounter) {
        finalCounter = currentCounter;
        finalWord = lowerArr[i]
      }
    }
    return finalWord;
  }
  