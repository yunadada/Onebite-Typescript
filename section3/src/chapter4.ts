// 대수 타입
// -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입

// ---------------------------------
// 1. 합집합 - Union 타입
// ---------------------------------
let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // 타입 별칭을 이용해서도 Union 타입을 만들 수 있음.

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 한 쪽 타입에만 포함되거나, 둘 다 포함되는 경우에만 Union 타입에 포함됨.
// Dog 타입도 아니고, Person 타입도 아니기 때문에 Union1 타입이 아님.
// let union4: Union1 = {
//   name: "",
// };

// ---------------------------------
// 2. 교집합 - Intersection 타입
// ---------------------------------
let variable: number & string;

type Intersection = Dog & Person;

// Intersection 타입은 Dog와 Person 타입의 모든 프로퍼티를 가져야함.(하나라도 없으면 Intersection 타입이 아님.)
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
