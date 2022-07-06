// 논리연산자 Logical Operator
// &&  그리고
// || 또는
// ! 부정 (단항연산자에서 온것)
// !! 불리언값으로 변환 ( 단항연산자 응용버전)
let num = 21;
if (num >= 0 && num < 9) {
  console.log('👍');
} // 실행안됨 하지만 num =8 이면 실행됨
if (num != 8) {
  console.log('👇🏻');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!'text'); // false  문자열은 true 인데 부정하니까 false
console.log(!!'text'); // true  부정한것에 부정한것 문자열 -> boolean
