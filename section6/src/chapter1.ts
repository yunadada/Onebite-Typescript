// 타입스크립트의 클래스
const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);

// 타입스크립트에서의 클래스는 자바스크립트 클래스로 취급되면서, 동시에 타입으로도 취급됨
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
