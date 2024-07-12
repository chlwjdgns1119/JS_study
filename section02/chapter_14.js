// async
// 어떤 함수를 비동기 함수로 만드는 키워드로 프로미스를 반환하도록 하는 키워드이다.

// 얘는 객체를 반환하는 함수가 아니라 객체를 결과값으로 갖는 새로운 프로미스를 반환하는 함수가 된다.
async function getData(){
    return {
        name: "최정훈",
        id: "winterlood",
    };
};

// await
// async 함수 내부에서만 사용이 가능한 키워드이다.
// 비동기 함수가 다 처리되기를 기다리는 역할을 하는 키워드이다.

async function printData(){
    const data = await getData(); // then 메소드를 써지 않아도 알아서 프로미스가 종료되기를 기다린다.
    console.log(data);
};
