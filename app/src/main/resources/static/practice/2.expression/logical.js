//논리연산자 Logical Operator
// && 그리고
//||  또는
// 단축 평가 : short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '😸', owner: 'Ellie' };

if (obj1 && obj2) {
  // 둘다 true
  console.log('둘다 true!');
}

if (obj1 || obj2) {
  // 둘중에 하나 true , 앞에것만 true로 판단 , 만약 앞에게 false이면 뒤에가 true인지 아닌지 검사
  console.log('둘다 true!');
}

// 조건문 내에서는 true인지 아닌지 체크, 조건문 밖에서 쓰면 평가를 단축 그래서 이거를 단축평가라고 부른다.
//  조건문 박에서는 obj1 이 true 니까 나머지 하나만 남았으니까 굳이 true인지 false인지 평가안되도 된다.
// 그래서 평가가 단축된다.
let result = obj1 && obj2; // obj2 가 출력 앞에것뿐만아니라 뒤에것도 확인해야해서 같이 확인하고 나옴.
console.log(result);

let result2 = obj1 || obj2; // 앞에게 true 니까 뒤에 확인 안해도되서 그래서 앞에것만 확인하고 나옴
console.log(result2);

//활용예
// 조건이 truthy 일 때 , && 무언가를 해야할 경우
// 조건이 falshy 일 때, || 무언가를 해야할 경우 간략하게 쓸 수 있음

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어!');
  }
  animal.owner = '바뀐주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1); // 주인이없어서 개가 그대로 호출됨 그리고 뒤에게 실행이 안됨
obj2.owner && changeOnwer(obj2); // 주인이있어서 바뀐 주인으로 나옴 그리고 뒤에게 실행이 됨
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); // 주인이없어서 새로운 주인으로 호출  그래서 뒤에게 실행이 됨
obj2.owner || makeNewOwner(obj2); // 주인이 있어서 바뀐주인으로 나옴. 그래서 뒤에게 실행이 안됨
console.log(obj1);
console.log(obj2);

// null 또는 undefined 인 경우를 확인할 때
let item = { price: 1 };
const price = item.price;
console.log(price); // undefined
