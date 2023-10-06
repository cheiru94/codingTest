<<<<<<< HEAD

// 🔸 Plus_One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  /* 입력 받은 숫자 배열의 마지막 자리에 +1 하기 */
  let toNum = Number(digits.join('')) + 1;
  let toStr = toNum.toString();

  /* 빈 배열 생성 */
  const newArr = new Array(toStr.length).fill();

  /* 문자를 하나씩 따개서 다시 배열에 입력 */
  for (let i = 0; i < toStr.length; i++) {
    newArr[i] = Number(toStr[i]);
  }


};

// 시도
console.log(plusOne([9]));
=======
// 🔸 문자 리스트를 문자열로 변환하기

function solution(arr) {
    var answer = '';

    // 문자열을 하나씩 따개자
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]  // 문자열 하나씩 대입
        console.log(answer) // 확인용
    }
    return answer;
}

solution(["a","b","c"]);
>>>>>>> 43f6a096485dff8cf59a4fac0e99d09dd6749f5e
