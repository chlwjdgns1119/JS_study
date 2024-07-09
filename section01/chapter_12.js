// 1. 함수 표현식. 값으로서 함수를 생성하는 방식을 함수표현식이라고 말한다.

// 함수를 변수에도 담을 수 있다.
// 그리고 변수의 이름으로도 호출해줄 수 있다.

function funcA(){
    console.log("funcA");
}

let varA = funcA;

varA() // funcA
console.log(varA) // funcA

// 이런 식으로함수를 만들면 funcB()로 부를 수가 없어서 그냥 함수 이름을 생략해도 된다. 이를 익명함수라고 부른다.
let varB = function funcB(){
    console.log("funcB");
};

let varC = function (){
    console.log("funcB");
};

varB();

// 2. 화살표 함수 
// fucntion생략해도 되고 => 뒤에 함수 식이나 return해줄 값을 바로 적어줄 수 있다. 매개변수도 함수표현식과 같이 ()안에 넣어주면 된다.
let varD = () => {
    return 1;
} 

let varE = (value) => value + 1;

console.log(varC(10)); // 11

let varF = (value) => {
    console.log(value);
    return value + 1;
};
