// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];

// 다음과 같이 할당해줄 수 있다.
let [one, two, three] = arr;
console.log(one, two, three); // 1 2 3

// 앞에 두 개만 할당해줄 수도 있다.
let [one1, two1] = arr;
console.log(one1, two1); // 1 2 

// 없을 것을 대비해서 기본값을 설정하고 할당해줄 수 있다.
let [one2, two2, three2 = 0, four2 = 4] = arr;
console.log(one2, two2, three2, four2); // 1 2 3 4

// 2. 객체의 구조분해 할당
let person = {
    name : "chlwjdgns",
    age: 22,
    hobby: "테니스",
};

let { name, age, hobby } = person; // 각각 객체의 프로퍼티를 key 값을 기준으로 할당해줄 수 있다.

let { name2, age2, hobby2, extra2 } = person; // 이러면 extra에는 undefined이 할당된다.

let { name3, age3, hobby3, extra3 = "hello" } = person; // extra에 기본값을 할당해주는 것도 가능하다.

let { name: name4, age4, hobby4, extra4 = "hello" } = person; // 이러면 name 프로퍼티의 값을 name4라는 변수에 저장할 수 있다.

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수 받는법
const funct = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

funct(person); // 객체를 넘겼을 때만 구조분해 할당을 받을 수 있다.