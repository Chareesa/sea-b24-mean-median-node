'use strict';

exports.mean = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return (total / array.length);
};

exports.median = function(array) {
  var values = array;
  values.sort(function(a, b) {
    return (a - b);
  });
  var midPosInArray = Math.floor(values.length / 2);
  return values[midPosInArray];
};

exports.mode = function(array) {
  var values = array;

  var modeObj = {};
  var maxEl = values[0];
  var maxCount = 1;

  for (var i = 0; i < values.length; i++) {
    var el = values[i];

    if (modeObj[el] === null) {
      modeObj = 1;
    } else {
      modeObj[el]++;
    }

    if (modeObj[el] > maxCount) {
      maxEl = el;
      maxCount = modeObj[el];
    }
  }
  return maxEl;
};

//When looking at mode: http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
//Code paired with my husband. I typed of course. :)
