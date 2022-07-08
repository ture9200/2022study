//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다. 외부로부터 전달받아지는 것을 콜백함수
// 전달될 당시에 함수를 바로 호출해서 반한된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스 (참조값) 가 전달된다.
// 그래서 함수는 고차함수(calculator) 안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  // a 와 b를 전달받고 action 이라는 함수를 전달받고 외부로부터 (레퍼런스만) 전달받아지는 함수를 콜백함수
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b); // a와  b 를 넣어서 호출 결과값을 반환  결과값은 a와 b를 전달해주면서 실행
  console.log(result);
  return result;
}
calculator(-1, -1, add);
calculator(1, 2, add); // add라는 이름만 전달 참조값을 전달
//calculator(1, 2, multiply); // 어떤걸 전달하냐에 따라 실행하는 함수가 달라진다.
