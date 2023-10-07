
// 🔸 Valid_Parentheses

function isValid(s) {
  const array = []; // array 생성
  const braketBox = { '(': ')', '{': '}', '[': ']' };

  // 문자열 따개기
  for (let index = 0; index < s.length; index++) {

    // 비교할 시작 브라켓 (기준점) = frontBraket
    const frontBraket = s[index];

    // 1. 시작 괄호 - array에 추가
    if (braketBox[frontBraket]) {

      array.push(braketBox[frontBraket]);

      // 2. 끝 괄호 - array에서 마지막 요소와 비교
    } else if (frontBraket !== array.pop()) {
      return false;
    }
  }
  // array에 아무것도 없으면 true , 있으면 false
  return array.length === 0;
}