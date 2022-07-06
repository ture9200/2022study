//함수 선언문 function name() {}
//함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

//화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
// 함수를 선언하는 것을 배웠고 값자체로 할당하면 함수가 메모리안에 만들어질거고
//메모리 안에 들어간 주소가 add에 할당이 된다.
//add를 호출하면 인자를 전달해서 함수를 호출하고 실행
// 함수의 이름이 없는것을 무명함수
// 변수에 할당한 add라는 이름을 활용해서 호출해야한다.
