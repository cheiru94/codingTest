// 🔸 Two_Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  // Variables
  const array = nums;
  const copyArray = array;
  const newArray = [];


  // 1. 배열
  for (let first = 0; first < array.length; first++) {
    // 2. 베열 복사
    for (let second = 0; second < copyArray.length; second++) {
      if (first === second) {
        continue;
      } else {
        if (target === array[first] + copyArray[second]) {
          newArray.push(first) // 3. 새로운 배열에 추가
        }
      }
    }
  };
  console.log(newArray);
  return newArray

};
twoSum([3, 2, 4], 6);