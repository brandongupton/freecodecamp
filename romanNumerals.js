function convert(num) {
  var chars = [];

  while (num > 1000) {
    chars.push('M');
    num -= 1000;
  }

  if (num >= 1900) {
    chars.push('C');
    chars.push('M');
    num -= 1900;
  }

  while (num > 500) {
    chars.push('D');
    num -= 500;
  }

  if (num >= 400) {
    chars.push('C');
    chars.push('D');
    num -= 400;
  }

  while (num > 100) {
    chars.push('C');
    num -= 100;
  }

  if (num >= 90) {
    chars.push('X');
    chars.push('C');
    num -= 90;
  }

  if (num >= 50) {
    chars.push('L');
    num -= 50;
  }

  if (num >= 40) {
    chars.push('X');
    chars.push('L');
    num -= 40;
  }

  while (num > 10) {
    chars.push('X');
    num -= 10;
  }

  if (num === 9) {
    chars.push('I');
    chars.push('X');
    num -= 9;
  }

  while (num >= 5) {
    chars.push('V');
    num -= 5;
  }

  if (num === 4) {
    chars.push('I');
    chars.push('V');
    num -= 4;
  }

  while (num > 0) {
    chars.push('I');
    num --;
  }

  console.log(chars);
  return chars.join('');
}
