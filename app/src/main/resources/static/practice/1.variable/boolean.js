//불리언 타입
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

//활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
//Falsy 거짓인 값
console.log(!!0); //false
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); // 오브젝트 자체가 있기 때문에 true 라고 한다.
console.log(!!Infinity);
