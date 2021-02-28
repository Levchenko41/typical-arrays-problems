
exports.min = function min(array) {
  if (array === undefined || array.length === 0) { return 0 }

  return array.reduce(function (a, b) {
    return (a < b) ? a : b;
  });


}

exports.max = function max(array) {

  if (array === undefined || array.length === 0) { return 0 }
  return array.reduce(function (a, b) {
    return (a > b) ? a : b;
  });
}

exports.avg = function avg(array) {

  if (!array || !array.length) {
    return 0
  }

  let w = array.reduce((a, b) => a + b);
  w = w / array.length
  return w;
}
