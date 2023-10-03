
// 🔸 문자열 겹쳐쓰기

/* 
  문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
  문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
  문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, overwrite_string, s) {
  let answer = '';

  // 1. 지정된 인덱스 이전까지의 문자열 추출 
  for (let i = 0; i < s; i++) {
    answer += my_string[i];
  }

  // 2. 두번째 인자로 들어오는 문자열 추출
  answer += overwrite_string;

  // 3. 나머지 문자열 추출
  let restStr = my_string.slice(s + overwrite_string.length)
  answer += restStr;

  return answer;
}
solution('He11oWor1d', 'lloWorl', 2);
