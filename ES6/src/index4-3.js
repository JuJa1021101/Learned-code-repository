const list = [
  { hobby: '吃饭', id: 1 },
  { hobby: '睡觉', id: 1 },
  { hobby: '敲代码', id: 2 },
];

const list1 = list.map(function (i) {
  // let obj = {};
  // Object.assign(obj, i);
  // obj.state = i.id === 1 ? '喜欢' : '沉迷';
  return i.id === 1;
});
console.log(list);
console.log(list1);
