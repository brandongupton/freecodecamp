function calculatePeriod(alt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + alt, 3)/GM));
}

function orbitalPeriod(arr) {
  // Create the containing array
  var perArray = [];

  // Convert each altitude to period
  for (var i = 0; i < arr.length; i++) {
    var period = {};
    period.name = arr[i].name;
    period.orbitalPeriod = calculatePeriod(arr[i].avgAlt);
    perArray.push(period);
  }

  return perArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
