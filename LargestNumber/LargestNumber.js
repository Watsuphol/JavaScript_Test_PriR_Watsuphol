// Thinking Process
// Convert Numbers to String
// Custom Sorting compare a and b
// find if a < b swap the position
// Join string

const largestNumber = (nums) => {
  let numStrings = nums.map((num) => num.toString());

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let a = numStrings[i] + numStrings[j];
      let b = numStrings[j] + numStrings[i];

      if (a < b) {
        let temp = numStrings[i];
        numStrings[i] = numStrings[j];
        numStrings[j] = temp;
      }
    }
  }

  let result = numStrings.join("");
  if (result[0] === "0") {
    result = "0";
  }

  return result;
};

console.log(largestNumber([10, 2, 13, 7]));
console.log(largestNumber([21, 36, 8, 45]));

// Loop idea
// L1 => L1 => "102" < "210" => change a to b and b to a === outcome [2,10,13,7]
// L1 => L2 =>  "1013" < "1310" === outlet [2,13,10,7]
