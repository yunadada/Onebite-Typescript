// 사용자 정의 타입가드
// 함수를 타입가드로 만듦.

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 함수가 반환하는 값이 true면 인수로 전달한 animal값이 Dog 타입임을 앎.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
