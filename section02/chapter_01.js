// js는 참 거짓이 아니더라도 참 거짓으로 평가한다. 여기서 참이나 거짓을 의미하지 않아도 조건문 내에서 참이나 거짓으로 평가하는 값을 truthy, false한 값이라고 한다.
// js의 모든 값들은 truthy하거나 falsy하다.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big integer라는 값으로 아주아주 큰값을 사용하는데 사용한다.

// 2. Truthy한 값 -> Flasy를 제외한 값이다.
let t1 = "hell0";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용사례

function printName(person){
    console.log(person.name);
};

let person;

printName(person); // type error 뜸. undefined를 읽으려고 해서 그렇다.

function printName2(person){
    if(!person){
        console.log("person의 값이 없습니다.");
        return;
    }
    console.log(person.name);
};
