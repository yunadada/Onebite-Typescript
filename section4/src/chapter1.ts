// ------------------------------------
// 함수 타입 표현식
// 타입 별칭을 이용해 함수의 타입을 별도로 정의하는 문법
// 함수의 타입을 표현식으로 정의할 땐 매개변수의 개수와 타입을 모두 맞춰줘야함.
// ------------------------------------
type Operation = (a: number, b: number) => number;

// const add: (a: number, b: number) => number = (a, b) => a + b; // 이렇게도 사용가능
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// ------------------------------------
// 호출 시그니처(콜 시그니처)
// ------------------------------------

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 프로퍼티 추가 정의 가능 (함수도 객체이기 때문)
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 하이브리드 타입 : 해당 타입을 갖는 변수를 마치 객체로도 쓰고 함수로도 쓸 수 있음.
// add2();
add2.name;
