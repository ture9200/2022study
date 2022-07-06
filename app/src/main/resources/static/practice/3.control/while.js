// while(조건) {}
// 조건이 false 가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}
let isActive = true;
let i = 0;
while (isActive) {
  console.log('아직 살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}

do {
  console.log('do-while 아직 살아있다!');
} while (isActive); // 처음에 무조건 실행하고 나서 검사하니까 딱한번 출력하게 된다.

// 조건이 맞을때만 실행하고 싶다면 while을 꼭 한번 무조건 실행해야한다면 dowhile을 선택해서 사용
