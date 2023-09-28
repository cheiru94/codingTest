// 🔸　문자열 반복해서 출력하기 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    val = '';  // 문자열을 저장할 변수 생성

    // 반복문으로 지정된 횟수만큼 문자열 추가
    for (let index = 0; index < n; index++) {
        val += str;
    }
    
    console.log(val) // 출력
});