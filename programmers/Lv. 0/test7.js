// 🔸 문자열 섞기 

function solution(str1, str2) {
  var answer = '';

  //  제한사항 str1 str2 글자길이가 10자 이하
  if (str1.length && str2.length <= 10) {

    // 번갈아 문자열 추철
    for (let i = 0; i < str1.length; i++) {
      answer += str1[i];
      answer += str2[i];
    }
  }

  console.log(answer);

  return answer;
}

