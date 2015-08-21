function add(num1, num2) {
  if (arguments.length > 2 || arguments.length < 1) return undefined;
  if (typeof num1 !== 'number') return undefined;
  if (arguments.length === 2) {
    if (typeof num2 !== 'number') return undefined;
    return num1 + num2;
  }

  var sumAnd = function(a) {
    if (typeof a !== 'number') return undefined;
    return a + num1;
  };

  return sumAnd;
}

add(2,3);
