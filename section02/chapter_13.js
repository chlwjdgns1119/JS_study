const promise = new Promise((resolve, reject) => {
    // 생성 됨과 동시에 자동으로 콜백함수들을 호출해서 안에 있는 비동기 작업들을 실행해준다.
    // 이 콜백함수를 excutor라고 부른다.
    // excutor에는 resolve, reject라는 매개변수가 전달 된다.
    // resolve에는 성공상태로 바꾸는 함수가 들어있고 reject에는 실패상태로 바꾸는 함수가 들어있다.

    setTimeout(() => {
        console.log("안녕");
        
        const num = 10;

        if(typeof num === "num"){
            resolve(num + 10);
        } else{
            reject("num이 숫자가 아닙니다");
        }
        resolve(); // 호출하면 성공상태로 바뀐다. 인수에는 결과값을 전달해줄 수 있다. reject도 마찬가지다.
    }, 2000);
}); // 생성자의 인수로는 비동기 작업을 진행할 콜백함수를 넣어주면 된다.


console.log(promise); // Promise {<pending>} 안녕 이라고 출력이 된다.

// then을 이용해서 result 값을 이용할 수 있다.
// resolve를 실행하고 나서 그 후에 then에 있는 콜백함수를 실행하게 된다. 동시에 결과값을 매개변수로 받아온다.
// 실패하면 then은 실행되지 않는다. 성공할 때만 호출된다. 실패는 catch를 사용하면 된다.
promise.then((value) => {
    console.log(value);
});

promise.catch((error) => {
    console.log(error);
});

// 붙여서 쓸 수도 있다. resolve아니면 catch가 수행되는거다. 이 문법을 chaining이라고 한다.
promise
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    });

function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 생성 됨과 동시에 자동으로 콜백함수들을 호출해서 안에 있는 비동기 작업들을 실행해준다.
        // 이 콜백함수를 excutor라고 부른다.
        // excutor에는 resolve, reject라는 매개변수가 전달 된다.
        // resolve에는 성공상태로 바꾸는 함수가 들어있고 reject에는 실패상태로 바꾸는 함수가 들어있다.
    
        setTimeout(() => {
            console.log("안녕");
            
            if(typeof num === "num"){
                resolve(num + 10);
            } else{
                reject("num이 숫자가 아닙니다");
            }
            resolve(); // 호출하면 성공상태로 바뀐다. 인수에는 결과값을 전달해줄 수 있다. reject도 마찬가지다.
        }, 2000);
    }); // 생성자의 인수로는 비동기 작업을 진행할 콜백함수를 넣어주면 된다.

    return promise;
}

// 이런 식으로 받아올 수도 있다.
const p = add10(0);

p.then((result) => {
    console.log(result);

    // 이렇게 콜백 지옥 발생하게 되면 노답임.
    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });

    // 하지만 아래 처럼 새로운 프로미스 객체를 반환해주면 then 메소드의 결과값이 된다.
    return newP;
}).then((result) => { // 그러면 얘는 newP를 받아와서 하는거다.
    console.log(result);
});


add10()
    .then((result) => {
        console.log(result);
        return add10(result);
    }).then((result) => { // 그러면 얘는 newP를 받아와서 하는거다.
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });






