// 5가지 배열 변형 메소드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환한다.

let arr1 = [
    { name: "최정훈", hobby: "테니스" },
    { name: "유재림", hobby: "위성일" },
    { name: "이수현", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스"); // 콜백함수를 순회시킨다.

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값들을 모아서 새로운 배열로 반환한다.
let arr2 = [1, 2, 3];
const mapResult = arre.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2; // 이런 식으로 반환값도 설정할 수 있다.
});

console.log(mapResult); // 원본 배열에 여러가지를 적용하고 새로운 배열로 반환할 수 있다.

let names = arr1.map((item) => item.name); // 객체는 이렇게 돌리면 된다.

// 3. sort
// 사전순으로 정렬하고 싶을 때 사용하면 된다
let arr3 = ["a", "b", "c"];
arr3.sort(); // 배열이 숫자면 정상적으로 작동하지 않는다.

// 숫자 비교 하는법
arr3.sort((a, b) => {
    if(a > b){
        // b가 a 앞에 와라
        return 1; // 양수를 반환해주면 둘 중 더 작은 값이 앞에 오도록 설정을 한다.
    }
    else if(a < b){
        return -1 // a가 b 앞에 와라
    }
    else{
        return 0; // 두 자리를 바꾸지 마라
    }
}); // sort를 호출하면서 비교를 하는 콜백함수를 넘겨줄 수 있다.

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메소드이다.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 문자열로 합쳐서 반환한다.
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.joined();
console.log(joined); // hi, im, winterlood로 나온다. 여기서 ,는 seperator로 배열의 요소와 요소 사이에들어가는 요소를 말한다.
const joined2 = arr6.joined("-"); // 구분자를 바꾸고 싶으면 넣어주면 된다. 그러면 hi-im-winterlood가 된다.

