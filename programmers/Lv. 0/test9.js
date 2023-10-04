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