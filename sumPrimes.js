function sumPrimes(num) {
  function isPrime(value) {
    var root = Math.ceil(Math.sqrt(value));
    if (value === 2) return true;
    for (var i = 2; i <= root; i++) {
      if ( (value % i) === 0) {
        return false;
      }
    }

    return true;
  }

  var sum = 0;
  var index = 2;
  while (index <= num) {
    if (isPrime(index)) {
      sum += index;
    }
    index++;
  }

  return sum;
}

sumPrimes(10);
