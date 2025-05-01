// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 <- 관리자
};
const user2 = {
    name: "홍길동동",
    role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
