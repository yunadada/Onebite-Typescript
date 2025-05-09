// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
// <조건>
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// ------------------------
// 기준1. 반환값이 호환되는가
// ------------------------
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 반환값 끼리의 업캐스팅 -> 호환 가능
// 반환값 끼리의 다운캐스팅 -> 호환 불가능
a = b; // 업캐스팅이므로 가능
// b = a // 다운캐스팅이므로 불가능

// ------------------------
// 기준2. 매개변수가 호환되는가
// ------------------------
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 반환값 끼리의 업캐스팅 -> 호환 불가능
// 반환값 끼리의 다운캐스팅 -> 호환 가능
// c = d; // 업캐스팅이므로 불가능
d = c; // 다운캐스팅이므로 가능

// 매개변수의 경우, 업캐스팅일 때 불가능하고 다운캐스팅일 때 가능한 이유
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 할당하려는 함수의 타입에 매개변수의 개수가 더 적을 때만 호환가능
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // func1의 매개변수는 2개인데 func2의 매개변수는 1개 이므로 불가능
