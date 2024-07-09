// 함수 선언

function greeting() {
    console.log("안녕하세요.");
}

// 함수는 선언하고 함수를 호출했을 때 실행이 된다. 함수를 호풀 할 때는 ()로 호출해야한다.
greeting();

// 함수 
// return문을 반환하면 함수가 종료되어서 그 아래가 진행 되지 않음
// 함수 내부에서 함수를 선언하고 함수를 호출하는 것이 가능하다.
function getArea(width, height){

    let area = width*height

    function another(){
        console.log(another);
    }

    another();

    return area;
}

getArea(10, 20);

// js에서는 호이스팅 기능도 있다. 호이스팅 기능은 아래에 함수가 선언되어 있어도 위에서 함수를 호출해도 작동이 되는 것을 호이스팅이라고 한다.
