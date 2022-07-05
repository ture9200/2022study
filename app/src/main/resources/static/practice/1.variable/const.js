//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수 변수 또는 변수
const text = 'hello';
// text='hi'; 이렇게 하면 안됨!

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
//apple = {} ;
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

// 객체는 heap이라는 공간에 보관되어져있다.
// 오브젝트가 보관된 메모리 주소를 가리키고 있다.
// 애플이 가리키고 있는 메모리셀에 재할당이 불가능하다.
// 애플에 다른 메모리 주소를 담을 수 없다 하지만 오브젝트 가리키고 있는 곳에 있는 오브젝트에는 변경이 가능하다.
// 재할당만 되지 않는다.
