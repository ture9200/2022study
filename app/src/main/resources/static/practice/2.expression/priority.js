let a = 2;
let b = 3;
let result = a + b * 4; // 우선순위를 변경하고 싶으면 () 를 넣어라
console.log(result);

result = a++ + b * 4;
console.log(result); //14
