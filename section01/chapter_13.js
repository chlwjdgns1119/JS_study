// 1. 콜백함수

// i am sub 
function main(value){
    value();
}

function sub(){
    console.log("i am sub");
}

main(sub);

// 2. 콜백함수의 활용, 반복되는 코드를 지울 수 있다.
function repeat(count, callback) {

    for(let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx) * 3;
});




