// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// [js] - 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// [ts] - 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// [주의] 선택적 매개변수는 필수 매개변수보다 앞에오면 안됨.
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name : ${name}`);
  // 타입좁히기를 해야하는 이유
  // => tall은 선택적 매개변수 이므로 number와 undefined의 유니온 타입임.
  // => 더하기 연산을 수행하기 위해선 tall을 number 타입으로 좁혀줘야 에러가 발생하지 않음.
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);

// 매개변수의 개수를 고정하고 싶은 경우엔 튜플 타입으로 지정하면 됨.
// ex) ...rest: [number, number, number]
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
