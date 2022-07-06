// 조건문 conditional statement
// if (조건) {}
// if (조건) {} else {}
// if (조건) {} else if (조건2) {} else {}
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('!!');
}
// 만약 orange 라면 이모지를 출력 안함
//  특정조건이 맞을때만 특정 코드가 실행

let fruitfood = 'orange';
if (fruitfood === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😊😊😊');
}

if (false) {
  // 0 이나 '' 이나 null 이나 undefined  해당하지 않아서 출력안됨
  // if (1)  // 1이나 'ㄴㅇㄹ' 은 true니까 출력이됨
  // if (2>1) // true 라 출력이 됨
  // true 냐 false 에 따라 출력이 될때가 있고 안될때가 있음
  console.log('출력되면 안됨!');
}
