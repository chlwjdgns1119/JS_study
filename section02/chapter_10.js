// 1. Date 객체를 생성하는 방법.
// new하고 Date라는 내장함수를 통해 생성할 수 있다. Date같은 내장함수들을 생성자라고 한다.
let date1 = new Date(); // 아무것도 주지 않으면 현재 시간을 생성하게 된다.
console.log(date1); // Tue Jul 12 2024 22:16:34 GMT+0900(한국 표준시)

let date2 = new Date("1997/01/07/10:10:10"); // 안에 숫자 넣으면 날짜에 해당하는 date객체를 만들 수 있다. -말고도 / .으로도 입력해도 된다.
let date3 = new Date(1997, 1, 7, 23, 59, 59); // ,로 숫자를 넣어도 된다.
console.log(date2); // Tue Jan 01 1997 10:10:10 GMT+0900(한국 표준시)

// 2. 타입 스탬프
// 특정 시간이 "1970년 1월 1일 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값이다.
// 위의 1970... 는 세계협정시라고 해서 UTC라고 부른다.
let ts1 = date1.getTime(); // getTime이라는 메소드는 객체에 저장되어 있는 타임스태프 값을 반환한다.

let date4 = new Date(ts1); // 새로운 데이트 객체를 생성하는 곳에도 사용 가능하다. 그러면 ts에 해당하는 날짜로 date객체가 생성된다. 얘는 생성하면 date1이랑 똑같은거다.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // month값은 숫자로 나오는데, 1월이 0으로 달이 0부터 11로 끝난다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간을 수정하는 방법
date1.setFullYear(2023); // 년도 2023으로 수정
date1.setMonth(2); // 얘 3월 입력되는거임
date1.setDate(30); // 30일로 수정
date1.setMinutes(23); // 23분으로 수정
date1.setHours(3); // 3시로 수정
date1.setSeconds(35); // 35초로 수정

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023 처럼 출력된다.
console.log(date1.toLocaleDateString()); // 2023. 3. 30. 오후 11:59:59 우리나라에 맞게 현지화된 상태로 시간이 출력된다.

