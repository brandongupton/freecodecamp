function drop(arr, func) {
  // Drop them elements.
  do {
    var test = [arr[0]];
    if (test.some(func)) {
      return arr;
    }
    arr.shift();
  } while (arr.length);

  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
