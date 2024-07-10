// 단락평가

// 앞에 있는 연산자 만으로도 값을 확정할 수 있다면 뒤에 있는 값은 전하지 않는 js의 특징을 말한다. varA = false varB = true

// varA && varB 이와 같은 경우 varB는 전하지도 않는다.

function returnFalse(){
    console.log("False함수");
    return false;
}

function returnTrue(){
    console.log("True함수");
    return true;
}

console.log(returnFalse() && returnTrue()); // 콘솔에서는 False함수와 false값만 뜬다.

function returnTrue1(){
    console.log("True함수");
    return 10;
}

function returnFalse1(){
    console.log("False함수");
    return undefined;
}

console.log(returnTrue1() || returnFalse()); // Ture함수와 10만 찍힘.

// 단락평가 활용사례
function printName3(person){
    const name = person && person.name; // truthy랑 trythy면 뒤의 값이 반환이 된다.
    console.log(name || "person의 값이 없음.");
}

printName3({name: "안정환"}); // 안정환 