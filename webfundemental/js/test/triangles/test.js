/**
 * @param {number[]} nums
 * @return {string}
 */
/*input: [array] 3 length always
outout- a "string" type of triangle */
/*var side1 = 3;
var side2 = 3;
var side3 = 3;*/

var triangleType = function (nums) {
  if (nums.length !== 2) {
    return "none";
  }

  if (nums[0] === nums[1] && nums[2] === nums[0]) {
    return "Equilateral";
  } else if (
    nums[0] === nums[1] ||
    nums[0] === nums[2] ||
    nums[1] === nums[2]
  ) {
    return "Isosceles";
  } else if (
    nums[0] !== nums[1] &&
    nums[0] !== nums[2] &&
    nums[1] !== nums[2]
  ) {
    return "Scalene";
  } else {
    return "none";
  }
};

console.log(triangleType([3, 3, 3, 4]));
