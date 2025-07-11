// 접근 제어자 (access modifier)
// 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법
// => public, private, protected

class Employee {
  // 필드
  // private name: string; //클래스 내부에서만 접근 가능(파생클래스에서도 접근 불가능)
  // protected age: number; //외부에서는 접근 불가능, but 파생클래스 내부에서는 접근 가능
  // public position: string;

  // 생성자
  // 생성자의 매개변수에 접근제어자를 달면 자동으로 필드를 만들기 때문에 기존의 필드와 중복됨. -> 생성자에 접근 제어자를 달려면 필드 정의는 생략해야함
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 생성자의 매개변수에 접근제어자를 달면 자동으로 필드의 값도 초기화하므로 생략 가능
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이정환", 27, "developer");
employee.position = "디자이너";
console.log(employee);
