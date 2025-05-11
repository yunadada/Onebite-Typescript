// 인터페이스
// 타입에 이름을 지어주는 또 다른 문법(상호간에 약속된 규칙)
// +객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공함)

interface Person {
  readonly name: string;
  age?: number;
  // 메서드의 오버로딩을 구현하려면 함수 타입 표현식이 아닌, 호출 시그니쳐를 이용해야함.
  sayHi(): void; // 호출 시그니쳐
  // sayHi: () => void; // 함수 타입 표현식
  sayHi(a: number, b: number): void;
}

// 인터페이스에 union이나 intersection을 이용해야 한다면
// 1) 타입 별칭에 활용하거나 2) 타입 주석에 활용해야함.

const person: Person = {
  name: "이정환",
  age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
