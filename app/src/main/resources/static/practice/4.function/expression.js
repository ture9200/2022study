//함수 선언문 function name() {}
//함수 표현식(값으로 평가될 수 있는것 ) const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); //3

//화살표 함수 const name = () => {}
add = (a, b) => {
  // a 와 b라는 인자를 받아서 더한 것을 리턴하는 함수
  return a + b;
};
console.log(add(1, 2));
// 함수를 선언하는 것을 배웠고 값자체로 할당하면 함수가 메모리안에 만들어질거고
//메모리 안에 들어간 주소가 add에 할당이 된다.
//add를 호출하면 인자를 전달해서 함수를 호출하고 실행
// 함수의 이름이 없는것을 무명함수
// 변수에 할당한 add라는 이름을 활용해서 호출해야한다.

// IIFE (Immediately-Invoked Function Expressions ) => 많이 사용되어지는 표현식은 아니다.
// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸
// 함수의 주소를 호출하면 바로 실행이 된다.
(function run() {
  console.log('😍');
})();
