function sumFibs(num) {
  var sum = 0;
  var fib = 1;
  var fibPrev = 0;
  var buffer = 0;
  while (fib <= num) {
    if (fib % 2 !== 0) {
      sum += fib;
    }
    buffer = fib;
    fib += fibPrev;
    fibPrev = buffer;
  }
  return sum;
}

sumFibs(4);
