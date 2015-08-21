function convertBinaryToDecimal(bin) {
  var power = 0;
  var sum = 0;
  for (var i = bin.length - 1; i >= 0; i--) {
    if (bin[i] === '1') {
      sum += Math.pow(2, power);
    }
    power++;
  }
  return sum;
}

function binaryAgent(str) {
  return str.split(' ').reduce(function(a, b) {
    return a + String.fromCharCode(convertBinaryToDecimal(b));
  }, '');
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
