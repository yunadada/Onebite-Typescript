// 클래스 : 객체를 만들어내는 틀

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드 : 클래스가 만들어낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자 : 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    // this : 클래스가 지금 만들고있는 객체
    (this.name = name), (this.grade = grade), (this.age = age);
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); 
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이정환", "A+", 27); // 생성자가 호출됨
console.log(studentB);
studentB.study();
studentB.introduce();
