// 기본 타입간의 호환성
// -> 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은지 판단하는 것

// 객체 타입도 기본타입처럼 서로 슈퍼/서브타입 관계를 가짐.
// 어떤 기준으로 관계를 갖는가? -> "프로퍼티 기준"

// name과 color 프로퍼티를 갖는 타입은 모두 Animal 타입
// 슈퍼타입
type Animal = {
  name: string;
  color: string;
};

// 서브타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 업캐스팅(가능)
animal = dog;

// 다운캐스팅(불가능)
// dog = animal;

// ----------------------------------------------

// 슈퍼타입
type Book = {
  name: string;
  price: number;
};

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// 업캐스팅
book = programmingBook;

// 다운캐스팅
// programmingBook = book

// ----------------------------------------------

// 초과 프로퍼티 검사
// -> 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사로,
// 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 안되도록 막음.

let boo2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};

let book3: Book = programmingBook; // 객체 초기화 시 객체 리터럴을 사용하지 않았으므로 초과 프로퍼티 검사가 발동하지 않아서 허용됨.

// 함수의 인수로 객체를 전달할 때 객체 리터럴을 전달하면 초과 프로퍼티 검사가 발동하므로, 변수에 저장해두었다가 인수로 변수를 전달해야함.
function func(book: Book) {}
func({
  name: "한 입  크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs"
});
func(programmingBook);
