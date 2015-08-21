function find(arr, func) {
  for (var i in arr) {
    var test = [arr[i]];
    if (test.some(func)) {
      return arr[i];
    }
  }
  return undefined;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
