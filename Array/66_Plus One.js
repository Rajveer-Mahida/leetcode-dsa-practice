let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]


var plusOne = function(digits) {
  let result = digits.join("")

  console.log(new BigInt(result));

  console.log(result);
  

  let resultArray = result+1;

  console.log(resultArray);
};

plusOne(digits);