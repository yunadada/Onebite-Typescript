// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용할 수 있는 타입
let anyVar = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// anyVar.toUpperCase();
// anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
export {};
// any는 타입 검사를 비활성화하기 때문에 바로 할당됨.
// unknown는 다른 타입에 할당하거나 사용하려면 명시적인 타입 확인 과정이 필요함.
