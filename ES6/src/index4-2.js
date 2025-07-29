// const list = [1, 2, 3, 4, [23, 45]];
// const list1 = [...list];
// // const list1 = list;
// list[4][0] = '23';
// console.log(list1);

// const list = [1, 2, 3, 4, 5];
// const [a, , ...list1] = list;
// console.log(a, list1);

// const list = [1, 2];

// function xd(a, b) {
//   console.log(a + b);
// }

// xd(...list);

// const list = [1, 2, 3, 4, 5];
// const list1 = [...list].fill(6);
// console.log(list);
// console.log(list1);

// const list = [
//   { hobby: '吃饭', id: 1 },
//   { hobby: '睡觉' },
//   { hobby: '敲代码' },
//   { hobby: '吃饭', id: 2 },
// ];
// let str = null;
// for (let i = 0; i < list.length; i++) {
//   if (list[i].hobby === '吃饭') {
//     str = list[i];
//   }
// }

// console.log(str);

// const result = list.find(function (i) {
//   return i.hobby === '吃饭';
// });
// const result1 = list.findIndex(function (i) {
//   return i.hobby === '吃饭';
// });
// console.log(result);
// console.log(result1);

// const list = [1, 2, 3, [4, 5, [6, 7]]];

// const list1 = [].concat(...list);
// const list2 = list.flat(2);

// console.log(list1);
// console.log(list2);

const list = [
  { hobby: '吃饭', id: 1 },
  { hobby: '睡觉', id: 1 },
  { hobby: '敲代码', id: 1 },
  { hobby: '吃饭', id: 2 },
];

const list1 = list.filter(function (item) {
  return item.hobby === '吃饭';
});

console.log(list1);
