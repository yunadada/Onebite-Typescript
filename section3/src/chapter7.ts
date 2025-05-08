// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

// value가 number타입인 경우 -> toFixed
// value가 string타입인 경우 -> toUpperCase
// value가 Date타입인 경우 -> getTime
// value가 Person타입인 경우 -> name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // typeof value === "object"로 하면 에러 발생
  // => 자바스크립트의 typeof 연산자는 null 값에 typeof를 해도 object를 반환하기 떄문
  // => Date와 null 모두 해당 조건문을 통과
  // [대안] instanceof 연산자 : 왼쪽에 있는 값이 오른쪽 클래스의 instance인지 검사 ([주의] 오른쪽에 타입이 들어오면 안됨.)
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // Person은 타입이므로 value instanceof Person로 검사 불가능
  // [대안] in 연산자 : 왼쪽 프로퍼티가 오른쪽 값에 있는지 검사 ([주의] in 연산자 뒤에는 null이나 undefined값이 들어오면 안됨. )
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
