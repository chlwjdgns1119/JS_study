// 1. 객체의 생성
let obj1 = new Object() // 객체 생성자를 통해 만들어 줄 수 있다.
let obj2 = {} // 객체 리터럴 방법으로 만들어 줄 수 있다. 대부분 이 방법을 사용한다.

// 2. 객체 프로퍼티 (객체속성) key value로 만들어 줄 수 있다. 키를 보통 프로퍼티라고 말한다. value에는 함수, 객체등 자유롭게 아무거나 넣어도 된다.
// key값은 문자열이나 숫자만 이용가능하다. 문자열은 "" 를 안 붙여주도 되는데 띄어쓰기있는 문자열을 key로 사용하고 싶으면 ""를 사용해야한다.
let person = {
    name : "이정환",
    age : 27,
    hobby: "테니스",
    extra: {},
    10: 20,
    "like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1 특정 프로퍼티에 접근하기. 점 표기법과 괄호 표기법이 있다.
// 둘다 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
peroson.job = "fe developer";
person["favoriteFood"] = "떡복이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["facoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 -> in 연산자를 사용한다.
let result1 = "name" in person; // 키가 객체에 들어있는지 없는지 boolean으로 반환한다.
