function smallestCommons(arr) {
  var high;
  var low;
  if (arr[0] > arr[1]) {
    // The first value is higher than the second
    high = arr[0];
    low = arr[1];
  } else if (arr[0] < arr[1]) {
    // Second value is higher than the first
    high = arr[1];
    low = arr[0];
  }
  else {
    //The values are equal
    return arr[0];
  }

  var target;
  var i = 0;
  var allMatch;
  do {
    // Use the high value to determine the next target number, since it will grow the fastest
    i++;
    target = high * i;

    // Assume that the target is the common multiple for all values until proven otherwise
    allMatch = true;

    // Start iterating through the range, checking to see if the current value has a common multiple for the target
    for (var j = high - 1; j >= low; j--) {
      var k = 1;
      var match = false;
      var prod;
      do {

        // Check to see if there is a value k where the current value * k matches the target
        prod = j * k;
        if (target === prod) {
          match = true;
          break;
        }

        // Don't have a match yet, set up to try the next value of k
        k++;
      } while (prod < target); // Once we've exceeded the target value there's no benefit to keep trying
      if (!match) {
        // Didn't find a match for this value, no need to check the remaining values
        allMatch = false;
        break;
      }
    }
  } while (!allMatch);

  // target is the smallest common multiple where all of the values had a match
  return target;
}


smallestCommons([1,5]);
