// 5가지의 요소 순회 및 탐색 메소드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특별한 기능을 수행시킨다.
let arr1 = [1, 2, 3];

// 인수로 콜백함수를 넣어준다. forEach가 반복문처럼 순회하면서 콜백함수를 매회 호출하고
// 매개변수로 현재 요소의 값과 현재 반복 카운트와 전체 배열의 값을 전달해준다.
arr1.forEach(function(item, idx, arr) {
    console.log(idx, item * 2); // 0 2, 1 4, 2 6
});

let doubleArr = [];

arr1.forEach((item, idx, arr) => {
    doubleArr.push(item * 2);
});

// 2. includes
// 배열의 특정요소가 있는지 확인하는 메소드이다.
ㅋ
// 3. index of
// 특정 요소의 인덱스를 찾아서 반환해준다.
// 찾으려는 값이 여러개(요소가 똑같은게 여러 개일 때) 그러면 가장 먼저 찾아낸 요소의 인덱스를 찾아내게 된다.
// 존재하지 않는 값을 찾으려고 하면 -1를 반환한다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1

// 4. findIndex, 콜백함수 인자 같음
// indexof는 객체 타입이 저장된 요소에 대해서 인덱스를 제대로 찾아낼 수 없다. 하지만 findIdex는 조건문을 넣음으로서 극복 가능하다.
// 특정 요소의 인덱스 위치를 반환하는 메소드이다. 
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정요소의 인덱스를 반환한다.
// 콜백함수가 참을 반환할 때 

let arr4 = [1, 2, 3];

// 순회하면서 가장 먼저 조건문을 만족하는 요소의 인덱스를 반환해준다.
// 마찬가지로 찾는게 없으면 -1을 반환한다.
const findedIndex = arr4.findIndex((item) => {
    if(item === 2) return true;
});

const findedIndex2 = arr4.findIndex((item) => item === 2); // 이것처럼 그냥 조건식만 반환하게 만들어줘도 된다.
console.log(findedIndex); // 1

// 5. find 콜백함수 인자 같음
// findIndex와 비슷한데 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환한다.
let arr5 = [
    {name: "최정훈"},
    {name: "유재림"},
];

const finded = arr5.find((item) => item.name === "최정훈"); // 인덱스가 아니라 요소 자체를 반환한다.
console.log(finded); // name: "최정훈"

