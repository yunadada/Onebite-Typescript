// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
    // 값 지정 안해도 자동으로 0부터 할당됨.
    // ADMIN,
    // USER,
    // GUEST,
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반 유저
    language: Language.korean,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
    language: Language.korean,
};
console.log(user1, user2, user3);
export {};
