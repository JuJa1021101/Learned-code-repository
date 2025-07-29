//

const person = {
  name: '张三',
  age: '18',
  phone: '18823139921',
  id: '111',
};

const res = 'age' in person;
const res1 = Reflect.has(person, 'age');
console.log(res, res1);

