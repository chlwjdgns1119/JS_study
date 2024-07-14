// math 모듈

export function add(a, b){
    return a + b;
}

export function sub(a, b){
    return a - b;
}

// default를 적어주면 모듈을 대표하는 단 하나의 기본 값이 된다. 
// import에서 불러올 때 중괄호 안에 작성해주는 것이 아니라 새로운 import에 그냥 불러오도록 설정해야하고
// 이 때 이름도 마음대로 정해줄 수 있다.
export default function multiply(a, b){
    return a * b;
}
/* 
commonjs에서 모듈을 내보내는 방법이다. module이라는 객체 프로퍼티의 exports에 저장하면 된다.
// 변수와 key값이 같은 경우 하나만 적어도 객체에 잘 저장된다.
module.exports = {
    add,
    sub,
}; */

// 객체를 리터럴로 생성해서 내보내주면 된다.
// export { add, sub};