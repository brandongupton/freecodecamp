function iterateArray(arr) {
  var flattened = [];
  for (var i in arr) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(iterateArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}
function steamroller(arr) {
  // I'm a steamroller, baby
  return iterateArray(arr);
}

steamroller([1, [2], [3, [[4]]]]);
