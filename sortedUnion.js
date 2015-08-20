function unite(arr1, arr2, arr3) {
  var masterArray = [];
  for (var i = 0; i < arguments.length; i++) {
    masterArray.push(arguments[i]);
  }
  return masterArray.reduce(function(a, b) {
    for (i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) == -1) {
        a.push(b[i]);
      }
    }
    return a;
  });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
