function pairwise(arr, arg) {
  var isUsed = [];
  var sum = 0;
  for (var i in arr) {
    isUsed[i] = false;
  }

  for (i = 0; i < arr.length; i++) {
    // If this element was already used, skip to the next one
    if (isUsed[i] === true) continue;
    var firstVal = arr[i];

    // Check all the proceeding elements (previous elements would have already been checked)
    for (var j = i + 1; j < arr.length; j++) {
      // If this element was already used, skip it as well
      if (isUsed[j] === true) continue;
      var secondVal = arr[j];

      // Check to see if they match arg
      if ((firstVal + secondVal) == arg) {
        // Found a match.  Update sum, mark the two elements as used, and break to the next i
        sum += i + j;
        isUsed[i] = true;
        isUsed[j] = true;
        break;
      }
    }
  }
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1,1,1], 2);
