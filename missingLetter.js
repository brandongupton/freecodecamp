function fearNotLetter(str) {
  var prevCharCode = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++) {
    console.log("charCode: " + str.charCodeAt(i));
    if (str.charCodeAt(i) != prevCharCode) {
      return String.fromCharCode(prevCharCode);
    }
    prevCharCode++;
  }
  return undefined;
}

fearNotLetter('abce');
