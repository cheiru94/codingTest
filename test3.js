// 🔸 !@#$%^&*(\'"<>?:; 를 출력하시오

/* \를 출력할 때는 \\ 이렇게 두개를 해야 \ 하나가 출력된다. */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`)  // 역슬래시(\)는 이스케이프 문자(escape character)
});