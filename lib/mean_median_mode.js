'use strict';

exports.mean = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += parseInt(array[i]);
  }
  return (total / array.length);
};

exports.median = function(nums) {
  var midPosition = nums.length / 2;

  if (nums.length % 2 === 0) {
    var num1 = parseInt(nums[midPosition - 1]);
    var num2 = parseInt(nums[midPosition]);
    return (num1 + num2) / 2;
  }
  else {
    return nums[Math.round(midPosition) - 1];
  }
};

exports.mode = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  var modeObj = {};
  var maxEl = nums[0];
  var maxCount = 1;

  for (var i = 0; i < nums.length; i++) {
    var el = nums[i];

    if (modeObj[el] === null || modeObj[el] === undefined) {
      modeObj[el] = 1;
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
