// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능을 한다.
// -> null, undefined가 아닌 값을 찾아내는 연산자이다.

let var1;
let var2 = 10;
let var3 = 20;

// 둘 중 null, undefined값 아닌거 반환한다. 둘다 값 있으면 앞에 있는 애 반환한다.
let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 앞에 있는 값 반환.

// 2. typeof 연산자
// -> 값의 type을 문자열로 반환한다.

let var7 = 1;
var7 = "hello";
console.log(typeof var7); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자이다.
// -> 조건식을 이용해서 참, 거짓의 값을 다르게 반환한다.
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수" // 첫번째에 조건 두번째에는 참일 때 반환값이다. 세번째에는 거짓일 때 반환값이다.