// Thinking Process
// Separate Odd and Even Numbers & Store
// Sort Borth Arrays
// Combine Both Arrays

const CustomSort = (arr) => {
  let arrOdd = [];
  let arrEven = [];
  for (let i of arr) {
    if (i % 2 !== 0) {
      arrOdd.push(i);
    } else if (i % 2 === 0) {
      arrEven.push(i);
    }
  }
  // Sort Number
  let oddNumber = arrOdd.sort((a, b) => a - b);
  let evenNumber = arrEven.sort((a, b) => a - b);

  let combineArray = oddNumber.concat(evenNumber);
  return combineArray;
};

console.log(CustomSort([4, 2, 5, 7, 1, 6]));
console.log(CustomSort([25, 40, 14, 91, 31, 22, 49, 13, 6]));
