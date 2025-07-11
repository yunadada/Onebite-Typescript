// 인터페이스와 클래스

// 인터페이스로 정의한 필드들은 무조건 public
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스는 클래스의 설계도 역할을 함
class Character implements CharacterInterface {
  // name: string;
  // moveSpeed: number;

  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string //private 필드가 필요하다면 인터페이스에 정의하지말고, 따로 정의해줘야함
  ) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
