// ---------------------
// Unknown 타입
// ---------------------

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅
  // let num:number = unknownVar;
  // let str:string = unknownVar;
  // let bool:boolean = unknownVar;
}

// ---------------------
// Never 타입(=공집합)
// 어떤 값도 저장되어서는 안되는 변수의 타입으로 활용
// never 타입에는 어떤 타입도 다운캐스팅 할 수 없음.
// ---------------------

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  // let never1: never = 10;
  // let never2: never = " string";
  // let never3: never = true;
}

// ---------------------
// Void 타입
// 반환값이 없는 함수의 타입에 사용
// ---------------------

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // return undefined -> 업캐스팅이므로 undefined 반환 가능
  }

  let voidVar: void = undefined;
}

// ---------------------
// any 타입
// 타입계층도를 완전히 무시 -> 따라서 자신에게 다운캐스팅도 가능, 자신이 다운캐스팅도 가능
// 모든 타입의 슈퍼타입이자, never를 제외한 모든 타입의 서브타입
// ---------------------

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // never 타입에는 다운캐스팅 불가능
  // neverVar = anyVar;
}
