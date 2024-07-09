// 1. if 조건문 
let num = 10;

if(num >= 10) {
    console.log("num은 10 이상입니다.");
}
else if(num >= 5){
    console.log("num은 5 이상입니다.");
}
else{
    console.log("조건이 거짓입니다.");
}

// 2. Switch문
// -> if문과 기능 자체는 동일하다.
// -> 디수의 조건을 처리할 때 if보다 직관적이다.

let animal = "cat";

// case가 후보가 될 수 있는 경우들을 적어주면 됨.
// switch는 일치하는 케이스를 위에서부터 탐색을 하는데 일치하는 케이스를 찾으면 아래도 싹다 실행한다. break를 적으면 그 부분에서 탈출할 수 있다.
switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다."); // default를 사용하면 어떤한 케이스에도 해당되지 않았을 때도 작동하게 할 수 있음. else와 비슷하다.
    }

}