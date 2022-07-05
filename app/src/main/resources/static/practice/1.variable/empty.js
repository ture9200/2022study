//null, undefined
let variable;
console.log(variable); // undefined  즉 정해지지 않은 상태

variable = null;
console.log(variable); // null 변수가 비어있는 상태

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof 123); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
