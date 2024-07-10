// 1. 배열 생성
let arrA = new Array(); // 배열 생성자를 통한 생성
let arrB = []; // 배열 리터얼(대부분 사용) 통한 생성이 있다.

// 선언과 동시에 값을 줄 수 있다. 그리고 어느 자료형이든 다 담을 수 있다.
let arrC = [
    1, 
    2, 
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
]; 

// 2. 배열 요소 접근
let item1 = arrC[0]; // 인덱스를 통해서 접근할 수 있다.
let item2 = arrC[1];

arrC[0] = "hello"; // 인덱스로 접근해서 값도 바꿔줄 수 있다.

