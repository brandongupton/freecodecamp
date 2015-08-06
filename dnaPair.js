function pair(str) {
 var arr = [];
  for (var i in str) {
    var element = str[i];
    var pairArr = [element];
    switch (element) {
      case 'A':
        pairArr.push('T');
        break;

      case 'T':
        pairArr.push('A');
        break;

      case 'C':
        pairArr.push('G');
        break;

      case 'G':
        pairArr.push('C');
        break;
    }
    arr.push(pairArr);
  }

  return arr;
}

pair("GCG");
