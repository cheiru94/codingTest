// 🔸　대소문자 바꿔서 출력하기


/* 
- String.toUpperCase() : 문자열을 대문자로 변환
- String.toLowerCase() : 문자열을 소문자로 변환 
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ['aBcDeFg'];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    let arr = [...str]; // 원본 유지하기 위해 새로운 배열 생성
    let result = "";    // 결과값 저장할 변수

    // 반복문을 통하여 문자열을 하나씩 검열
    for (let i = 0; i < arr.length; i++) {
        
        // 대문자?
        if (arr[i] === arr[i].toUpperCase()) {
            result += arr[i].toLowerCase()
        
        // 소문자?
        } else {
            result += arr[i].toUpperCase()
        }
    }

    console.log(result);

});