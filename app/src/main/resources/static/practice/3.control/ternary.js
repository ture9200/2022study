//삼항 조건 연산자  Ternary Operator
// 조건식 ? 참인경우 : 거짓인 경우
// 조건식 ? 표현식 : 표현식
// 왼쪽의 표현식이 true 이면 첫번째 표현식이 실행이 된다.
// 왼쪽의 표현식이 false이면 두번째 표현식이 실행이 된다.
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('!!');
}

//이걸 심플하게 작성할 수 있음
fruit === 'apple' ? console.log('🍎') : console.log('🍊');

// 다른 방식으로
let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);
