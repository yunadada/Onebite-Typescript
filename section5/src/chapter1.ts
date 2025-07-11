// 인터페이스의 확장(=상속)

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // 상속받는 인터페이스에서 동일한 프로퍼티의 타입을 재정의 가능
  // 단, 재정의 하려는 타입이 원본 타입의 서브 타입인 경우에만 가능
  // name: "hello";
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}
