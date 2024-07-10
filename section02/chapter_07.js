// 6가지 조작 메소드

// 1. push
// 배열의 맨 뒤에 요소를 추가하는 메소드이다.
let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // 1 2 3 4
arr.push(5, 6, 7); // 여러개 추가도 가능!!
const newLength = arr.push(7); // push는 그리고 결과의 길이로 반환한다.

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환한다.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3
console.log(arr2); // 1 2

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환한다.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); // 1, [2, 3]

// 4. unshift
// 배열의 맨 앞에 요소를 추가하고 반환한다.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 0, [0, 1, 2, 3]

// shift와 unshift는 pop과 push보다 느리게 동작한다. 뒤에 붙이는건 쉽지만 앞에 새로 추가하거나 제거하는건
// 삭제나 추가할 경우 index를 하나씩 미뤄야한다.

// 5. slice
// 배열의 특정 범위를 잘라서 새로운 배열로 반환한다. 그리고 잘라내도 원본 배열의 값이 변경되지는 않는다.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 첫 번째에는 잘라내는 걸 시작할 인덱스 두 번째에는 끝내줄 인덱스를 넣어줘야한다.

let sliced2 = arr5.slice(2); // 끝까지 짤라줄거면 2번째 인자를 안 넣어줘도 된다.
let sliced3 = arr5.slice(-3); // 뒤에서 부터 자르고 싶으면 음수를 붙여줄 수 있다. [3, 4, 5]
console.log(sliced); // [3, 4, 5]

// 6. concat
// 두 개의 다른 배열을 이어붙여서 반환하는 메소드이다
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
consloe.log(concatedArr); // [1, 2, 3, 4]


