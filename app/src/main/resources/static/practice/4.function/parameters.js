// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수내부에서 접근이 가능한 arguments 객체에 저장됨
function add(a, b) {
  // function a=1, b=1)  기본값을 지정할 수 있다.
  // add() 에만 기본값을 설정해줄 수 있다.
  // 매개변수 기본값을 설정해줄 수 있는데 이걸 default parameter 라고 부른다.
  // Default Parameters a =1,
  // undefined 일때만 기본값을 쓰고 값이 주어지면 주어진 값을 쓴다.
  console.log(a);
  console.log(b);

  // 배열처럼 접근이 가능하다.
  console.log(arguments); // Arguments{'0' :1, '1':2, '2':3}
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
  console.log(arguments[2]); //3

  return a + b;
}

add(1, 2, 3);

//아무것도 전달되지 않으면 undefined 그래서 필요한 매개변수를 전달해야함
// 만약 추가적으로 값을 전달한다면 무시되고 필요한 값들이 들어오는 것을 확인할 수 있음
// 함수는 객체기 때문에 함수라는 객체안에 유용한 프로퍼티가 들어있는데 그것을 아규먼트라고 한다.

//Rest 매개변수 Rest Parameters

function sum(...numbers) {
  // 몇개의 인자를 받을 지 모를때 이렇게 씀
  // 배열로 받아온다.
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

function sum(a, b, ...numbers) {
  // 첫번째 인자와 두번째 인자는 a와 b로 받고
  console.log(a); // 1
  console.log(b); //2
  console.log(numbers); //3 , 4,5,6,7,8
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
