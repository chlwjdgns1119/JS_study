/* 
commonjs에서 moodule시스템 이용
// require를 이용해 모듈의 경로를 인수로 전달하면 불러올 수 있다.
const moduleData = require("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(2, 1));

// 구조분해 할당으로도 받아올 수 있다.
const { add, sub } = require("./math");
console.log(add(1, 2));
console.log(sub(2, 1));
*/
// 얘도 마찬가지로 경로 지정해서 가져오면 된다. es모듈은 확장자까지 적어줘야한다.
/* import { add, sub } from "./math.js";
import mul from "./math.js"; */

import mul, { add, sub } from "./math.js"; // 동일한 경로로부터 불러오면 합치는 것도 가능하다.

console.log(mul(1, 2));
console.log(add(1,2));
console.log(sub(2,1));
console.log("안녕 nodejs");

