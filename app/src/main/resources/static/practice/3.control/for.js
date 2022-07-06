// 반복문 Loop Statement
// for (변수 선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식의 거짓이 될 때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
} // i 대신 count 로 써도 되는데 너무 길어서 ...

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프
for (;;) {
  //  console.log('😍');
} // 계속 출력
// 종료되도록 코딩하는게 중요

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    //continue;  // 아래코드는 무시가 되고 그다음 반복으로 넘어간다.

    console.log('i가 드디어 10이 되었다.!');

    // break; // 반목문을 특정조건에 그만두고싶을떼 사용
  }
  console.log(i);
}
