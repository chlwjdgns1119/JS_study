// 1. number type
let num1 = 28;
let num2 = 3;
let num3 = -29;

let inf  = Infinity;
let minf = -Infinity;
let nan = NaN;

// ex) 아래는 NaN이라고 찍힌다.
console.log(1 * "hello");

// 2. string type
let myName = "chlwjdgns";
let myLocation = "철원";
let introduce = myName + myLocation; // chlwjdgns철원 -> 문자열 연산을 지원한다.

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

// 3. boolean type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null type(아무것도 없다)
let empty = null;

// 5. undefined type
let none;
console.log(none);