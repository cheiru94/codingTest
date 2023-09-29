// 홀짝 구분하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);

    //홀짝 구분
    if (n%2===0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
});