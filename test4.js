const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {

    // 백틱을 활용하자s
    console.log(`${Number(input[0])} + ${Number(input[1])} = ${Number(input[0])+Number(input[1])}`);
    
});