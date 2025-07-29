// const xd = '小滴课堂';
// const list = [12, 23, 45];
// const xd1 = xd.includes('滴', 0);
// console.log(xd1);

// const xd1 = xd.startsWith('课堂', 2);

// const xd1 = xd.repeat(4);

// const list1 = list.includes(12, 1);
// console.log(list1);
const xd1 = '小滴';

console.log(xd1.padEnd(4, '课堂'));

const xd = '张三';
const age = 18;
const hobbies = '打篮球';
function fun() {
  return '王五';
}
const str1 = '我叫' + xd + '今年' + age + '爱好是' + hobbies;
const str2 = `我叫${fun()}今年${age}爱好是${hobbies}`;

// console.log('es5:', str1, 'es6:', str2);
