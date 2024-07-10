// 순회
// 순회(iteration)은 배열, 객체에 저장된 여러 값을 하나씩 접근하는 것을 말한다.
// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// length는 모든 배열이 가지고 있는 프로퍼티로 현재 배열의 길이를 저장한다.
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 1.2 for of 반복문, 배열을 순회하기 위해서만 존재하는 특수한 반복문이다.
// of 뒤에 있는 배열의 값을 순서대로 하나씩 꺼내서 item에 저장한다.
for(let item of arr){
    console.log(item);
}

// 2. 객체를 순회하는 방법
let person = {
    name: "최정훈",
    age: 22,
    hobby: "codding",
};

// 2.1Object.keys
// 내장함수로 객체에서 key 값들만 뽑아서 새로운 배열로 반환해준다.

let keys = Object.keys(person);
console.log(keys);

for(let i = 0; i < keys.length; i++){
    console.log(keys[i]);
}

for(let key of keys){
    const value = person[key]; // const써도 괜찮은 이유가 반복이 될 때마다 공간이 초기화 됨. 그래서 지역변수 개념으로 볼 때도 맞음.
    console.log(key, value); // 다 나온다.
}

// 2.2 Object.values
// 객체에서 value값들만 뽑아서 새로운 배열로 반환한다.
let values = Object.values(person);
console.log(values);

for(let value of values){
    console.log(value);
}

// 2.3 for in
// 객체만을 위해 존재하는 반복문이다. 객체의 프로퍼티의 키를 순서대로 값에 할당해준다.
for(let key in person){
    console.log(key);
}





