function add(a, b) {
  // console.log(a);
  // console.log(b);
  return a + b;
}
const sum = add;

console.log(sum(1, 2)); // 소괄호이용해서 호출 매개변수 전달,
console.log(add(1, 2));
