function mineFinder(arr) {
    var coordinates = [];
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        for(var j = 0; j < arr[i].length; j++) {
          if(arr[i][j] === 1) {
            coordinates.push(i, j)
          }
        }
      }
    }
    return coordinates
  }