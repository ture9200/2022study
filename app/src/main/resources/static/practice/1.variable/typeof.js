// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
// 동적으로 실행할 때 할당된 값에 따라 타입이 변경된다.
// weekly type = 약하게 타입이 결정되어있다.

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable); //string

variable = 123; // 할당된 값에 따라 타입이 결정된다. 동적으로 결정된다.
console.log(typeof variable); //number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); //symbol

console.log(typeof 123); // number
console.log(typeof '123'); //string
