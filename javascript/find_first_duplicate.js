function findFirstDuplicate(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

/* Pseudocode:
create a for loop to iterate over each index of array
  compare the first index to every remaining value
    if the first index equals any other remaining value, return that index
    if not, compare second index
  repeat
If no duplicates are found, return -1
*/


/*  Written explanation of your solution
Using Javascript, write a function findFirstDuplicate that receives one argument, an array. This function should iterate over the array and find the first duplicate value that occurs. If a duplicate exists, the function should return that duplicate. If no duplicates exist, the function should return -1. 

Input: [2, 1, 3, 3, 2]
Output: 3

Input: [1, 2, 3, 4]
Output: -1
*/

