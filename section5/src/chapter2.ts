// 타입 별칭은 동일한 이름으로 타입을 2번 정의하면 오류 발생
// 인터페이스는 동일한 이름으로 타입을 2번 정의해도 오류 발생하지 않음. -> 동일한 이름으로 정의한 인터페이스들은 모두 합쳐지기 때문 (=선언 합침)
interface Person {
  name: string;
}

interface Person {
  // 충돌 : 동일한 프로퍼티를 중복 정의하는데, 타입을 다르게 정의한 경우
  // name: number;

  // 서브타입도 안됨 -> 반드시 동일한 타입으로 정의해줘야 함
  // name: string;
  age: number;
}

// 각각의 인터페이스에 정의된 프로퍼티들이 모두 합쳐진 객체 타입으로 정의됨
const person: Person = {
  name: "",
  age: 27,
};

// 주로 모듈 보강할 때 사용
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
