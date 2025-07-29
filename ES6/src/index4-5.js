// const a = new Map([
//   ['name1', '张三'],
//   ['name2', '李四'],
//   ['name3', '王五'],
// ]);
// a.set('name1', '张三');
// a.clear();
// a.delete('name2');
// console.log(a.size);
// const b = a.has('name4');
// const b = a.get('name4');
// a.set('name2', '小滴');

// for (let i of a.keys()) {
//   console.log(i);
// }
// for (let i of a) {
//   console.log(i);
// }

// console.log(a);

const a = new WeakMap([[{ name: '1' }, '张三']]);
const b = {};
console.log(a);
