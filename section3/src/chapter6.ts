// --------------------------------------------
// 타입 단언(= 타입 assertion)
// 값 뒤에 as 키워드를 사용하여 타입을 명시하는 것
// 실제로 값의 타입을 바꾸는 것이 아닌, 컴파일러의 눈을 잠깐 가리는 효과
// [주의] 확실할 때만 사용할 것!
// --------------------------------------------

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// --------------------------------------------
// 타입 단언의 규칙
// 값(A) as 단언(B) <- 단언식
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입인 경우에만 타입 단언 가능
// --------------------------------------------

let num1 = 10 as never; // 10(number)이 never의 슈퍼타입이므로 가능
let num2 = 10 as unknown; // 10(number)이 unknown의 서브타입이므로 가능
// let num3 = 10 as string; // 10(number)과 string은 교집합이 없기 때문에 불가능
let num3 = 10 as unknown as string; // 다중 단언(가능한 사용하지 않는 것이 좋음.)

// --------------------------------------------
// const 단언
// 변수 선언 시 const로 선언한 것처럼 만들어주는 것
// 객체 타입과 사용할 때 활용도 있음.
// --------------------------------------------

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = '' // 프로퍼티의 값을 수정할 수 없는 '읽기 전용' 객체가 됨.

// --------------------------------------------
// Non Null 단언
// ! = Non Null 단언 연산자
// 어떤 값이 null이거나 undefined이 아니라고 타입스크립트 컴파일러에게 알려줌.
// --------------------------------------------

type Post = {
  title: string;
  author?: string; // ?(옵셔널체이닝) -> author은 선택적 프로퍼티임을 의미
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

const len: number = post.author!.length;
