

function findFirstDuplicate(array) {
  const newArray = [];
  for (i=0; i<array.length; i++){
    if (newArray.includes(array[i])){
      return array[i]
    } else {
      newArray.push(array[i])
    }
  }
  return -1;
}




if (require.main === module) {
  console.log("TEST 1 Expecting: 3");
  console.log("Result:", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("TEST 2 Expecting: -1");
  console.log("Result:", findFirstDuplicate([1, 2, 3, 4]));

  console.log("TEST 3 Expecting: 'a'");
  console.log("Result:", findFirstDuplicate(["a", "b", "a", "c"]));

  console.log("TEST 4 Expecting: 3");
  console.log("Result:", findFirstDuplicate([1, 2, 3, 3, 2, 1]));

  console.log("TEST 5 Expecting: 2");
  console.log("Result:", findFirstDuplicate([1, 2, 3, 2, 1]));
}

module.exports = findFirstDuplicate;

/* Pseudocode 2:
count all instances of elements in array
add index to object?
first value to equal 2, return key
*/







/* Pseudocode 1:
create a for loop to iterate over each index of array
  compare the first index to every remaining value
    if the first index equals any other remaining value, return that index
    if not, compare second index
  repeat
If no duplicates are found, return -1
*/


/*  Written explanation of your solution1
Using Javascript, write a function findFirstDuplicate that receives one argument, an array. This function should iterate over the array and find the first duplicate value that occurs. If a duplicate exists, the function should return that duplicate. If no duplicates exist, the function should return -1. 

Input: [2, 1, 3, 3, 2]
Output: 3

Input: [1, 2, 3, 4]
Output: -1
*/

/*Code solution 1 (incorrect)
function findFirstDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]){
        return arr[i]
      }
    }
  }
  return -1;
}
*/

