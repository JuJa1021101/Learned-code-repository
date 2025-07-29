// const obj = { a: 1 };

// const list = new Set([4, 5, 6]);
// // list.add('1');
// // list.clear();
// // console.log(list.has(obj));
// console.log(list.keys());
// console.log(list.values());

let arr = [1, 2, 2, 3, 4, 4, 4];
let list = new Set(arr);
let list1 = Array.from(list);
console.log(list1);
