function presses(str) {
    var lowercase = str.toLowerCase();
    var keyboard = [['1'], ['a','b','c','2'], ['d','e','f','3'], ['g','h','i','4'], ['j','k','l','5'], ['m','n','o','6'], ['p','q','r','s','7'], ['t','u','v','8'], ['w','x','y','z','9'], ['0'], [' ']];
    var counter = 0;
    for(var i = 0; i < lowercase.length; i++) {
      for(var j = 0; j < keyboard.length; j++) {
        for(var k = 0; k < keyboard[j].length; k++) {
          if(lowercase[i] === keyboard[j][k]) {
            counter += k+1
          }
        }
      }
    }
    return counter
  }