// 타입 추론
// 타입스크립트가 타입을 추론하는 기준 = 변수의 초기값

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 암묵적으로 any 타입으로 추론됨.(명시적으로 any 타입으로 정의하는 것과 다름.) -> 변수에 들어가는 값에 따라 any 타입이 계속해서 진화함.
d = 10; // number 타입으로 진화
d.toFixed();

d = "hello"; // string 타입으로 진화
d.toUpperCase();
// d.toFixed()

const num = 10; // number 타입이 아닌 number 리터럴타입으로 추론됨.(const는 어차피 상수이기 때문에 10(=number 리터럴)이라는 값만 담을 수 있음.)
const str = "hello";

let arr = [1, "string"]; // union 타입으로 추론됨.
