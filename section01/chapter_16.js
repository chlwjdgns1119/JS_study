// 1. 상수 객체, 상수에 저장해놓은 객체를 말한다.
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 상수를 선언하면 저장된 값을 다시 바꿀 수 없다. 그래서 다시 객체를 새로 선언하면 에러가 난다.
animal = { a: 1 }; // err

// 하지만 처음에 선언한 객체에서 추가, 수정, 삭제는 가능하다.
animal.age = 2; // 추가
animal.name = "껌둥이"; // 수정
delete animal.age; // 삭제

console.log("animal");

// 상수는 엄연히 새로운 값을 할당하지 못 하는 변수를 의미한다. 그래서 저장되어 있는 객체값의 프로퍼티를 수정하는건
// 문제가 되지 않는다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말한다.

const person = {
    name: "이정환",
    // 메서드 선언
    sayHi(){
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();