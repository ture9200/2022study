// return 을 명시적으로 하지 않으면 자동으로 undefined이 반환됨
function add(a, b) {
  // return a + b;
  return undefined;
}
const result = add(1, 2);
console.log(result);

// return을  함수 중간에 하게되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  if (num < 0) {
    return; // = return undefined;
    // 함수를 수행할 수 있는 여건이 아닐 때 일찍이 함수를 종료하는 용도로 사용
  }
  console.log(num);
}

print('text'); // 프린트해 명령만 하고 지나가니까 반환값을 신경쓸 필요 없다.
//console.log(outcome);
