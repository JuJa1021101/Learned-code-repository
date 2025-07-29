// const a = { aa: 1, bb: 2 };
// const b = { cc: 3, dd: 4 };
// const c = { ...a, ...b };
// console.log(c);

// let name = '张三';
// let age = 18;

// let obj = {
//   name: name,
//   age: age,
//   sayHello: function () {
//     console.log('hello');
//   },
// };

// let obj = {
//   name,
//   age,
//   sayHello() {
//     console.log('hello');
//   },
// };
// obj.sayHello();
// console.log(obj);

// const a = Object.is(NaN, NaN);
// console.log(a, NaN === NaN);
// let a = { aa: '1', bb: 2 };
// let b = { aa: 1 };

// const c = Object.assign(b, a);

// console.log(c);

let xd = {
  hobby1: '吃饭',
  hobby2: '睡觉',
  hobby3: '敲代码',
};

const a = Object.entries(xd);
console.log(a);
