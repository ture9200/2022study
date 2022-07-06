// 퀴즈!

//num 의 숫자가 짝수이면 👍 ,  홀수이면 👇🏻 을 출력하도록
// if
let num = 2;
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👇🏻');
}

// ternary
num % 2 === 0 ? console.log('👍') : console.log('👇🏻');

// 다른 방식으로
let emoji = num % 2 === 0 ? '👍' : '👇🏻';
console.log(emoji);
