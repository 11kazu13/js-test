// let data = [];
// data.push("あ");
// data.push(2);
// console.log(data);

// let list = ["イ", "ろ", "は", "に", "ほ", "へ", "と"];
// let keyWord = "に";
// let result = [];

// list.forEach((v, i) => {
//   if (v === keyWord) {
//     result.push(i);
//   }
// })

// console.log(result);
// console.log(list.sort());

// let books = [
//   {title: "typescript入門", price: 2983},
//   {title: "bootstrap入門", price: 3432},
//   {title: "ハジメテノAndroid開発", price: 990},
//   {title: "これから始めるvue.js", price: 700}
// ];

// console.log(
//   books.filter((book) => (book.price < 1000))
// );

// let data = new Map([
//   ["1st", "ファースト"],
//   ["2nd", "セカンド"],
//   ["3rd", "サード"]
// ]);

// console.log(data);

// let keys = [1, 2 ,3];
// let values = ["あ", "い", "う"];

// let data = new Map(
//   keys.map((key, index) => [key, values[index]])
// );

// console.log(data);

// let data = new Map();
// data.set("一", 1)
//     .set("二", 2)
//     .set("三", 3);

// console.log(data.get("一"));

// for (let key of data.keys()) {
//   console.log(key);
// }

// for (let value of data.values()) {
//   console.log(value);
// }

// for (let [key, value] of data.entries()) {
//   console.log(`${key}:${value}`)
// }

let data = new Map([
  ["1st", "ファースト"],
  ["2nd", "セカンド"],
  ["3rd", "サード"]
]);

data.forEach((key, value) => {
  console.log(key, value);
})
