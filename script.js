// const isAdult = true;
// const vip = true;
// const isDrunken = true;
// const money = true;

// if (money || (!isDrunken && (isAdult || vip))) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// ============

// const today = new Date().getDay();
// console.log(today);

// console.log(
//   today == 0
//     ? "일요일"
//     : today == 1
//     ? "월요일"
//     : today == 2
//     ? " 화"
//     : today == 3
//     ? "수"
//     : today == 4
//     ? "목요일"
//     : today == 5
//     ? "금"
//     : "토"
// );
// ========

// let number = 10;
// console.log("숫자는", number, "입니다.");

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i}X${j}= ${i * j}`);
//   }
// }

// let arr = [];
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0 || i % 5 == 0) {
//     arr.push(i);
//     // sum += i;
//   }
// }
// // console.log(sum);
// console.log(arr);
// const add = arr.reduce((a, b) => a + b, 0);
// console.log(add);

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 == 1) continue;
//   sum += i;
// }

// console.log(sum);
function sayHello(name = "friend") {
  console.log(`Hello, ${name}`);
}
sayHello();
