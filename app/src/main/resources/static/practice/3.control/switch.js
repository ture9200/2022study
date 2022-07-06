// 조건문 Conditional Statement
//  Switch
// if else if else if else if.. else
//  정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0: 월요일, 1: 화요일,... 6:일요일

//if 문
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else {
  dayName = '일요일';
}

// switch 문
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음');
}
console.log(dayName); //일요일

// break 문을 사용하지 않으면 제일 마지막에 있는것이 실행됨
// 그래서 중간중간  break를 걸어줘야한다.
// break를 걸지않아야하는 경우
let condition = ' okay'; // okay, good 좋음 ! bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
  default:
    console.log('해당하는 상태가 없음'); //
}
console.log(text); // 좋음
