// for를 통해서 만들 수 있음.
for(let idx = 0; idx < 10; idx++){
    console.log("반복!");

    // 조건문이랑 같이 break쓰면 조건 전에 끝낼 수 있음.
    if( idx >= 5){
        break;
    }

    // continue를 사용하면 반복문을 안 사용하고 넘어갈 수 있다.
    if(idx % 2 === 0){
        continue;
    }
}
