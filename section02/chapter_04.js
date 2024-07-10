// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할이다

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // 4 1 2 3 5 6

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function fucnA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

fucnA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수이다.

// 주의할 점은 rest 뒤에는 추가 매개변수를 줄 수 없다.
function funcB(...rest){ // 얘는 스프레드 연산자가 아니라 함수 매개변수 자리에 사용했으니 rest임.
    // 이러면 함수를 호출하면서 전달한 모든인수들이 다 배열형태로 저장됨.
    console.log(rest); // [1, 2, 3]
}

funcB(...arr1);

function funcC(one, ...rest){ // 이러면 첫 번째 인자만 one에 저장됨. 나머지는 rest에 저장됨. two, three도 마찬가지로 가능하다.
    console.log(rest); // [2, 3]
}


