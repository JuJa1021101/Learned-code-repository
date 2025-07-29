// let xd = {
//   a: '小滴课堂',
//   a: 'xdclass.net',
// };

// console.log(xd);

// let xd = Symbol();

// console.log(typeof xd);

// let xd1 = Symbol('小滴课堂');
// let xd2 = Symbol('小滴课堂');

// console.log(xd1 === xd2);

// let xd = Symbol('xd');

// let obj = {
//   xd: '第一个值',
//   [xd]: '第二个值',
// };

// let obj = {};

// obj.xd = '点运算符';
// obj[xd] = '数组运算符';
// Object.defineProperty(obj, xd, { value: '对象内置方法' });

const xd = {
  a: '1',
  b: '2',
};
xd.a = 3;
console.log(xd);
