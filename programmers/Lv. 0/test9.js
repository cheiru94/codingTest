// 🔸 문자 리스트를 문자열로 변환하기

function solution(arr) {
    var answer = '';
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
        console.log(answer)
    }
    return answer;
}

solution(["a","b","c"]);