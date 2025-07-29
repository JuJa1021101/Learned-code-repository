const input = document.getElementById('input');
const span = document.getElementById('span');

const obj = {};
const handler = {
  get: function (target, key) {
    return target[key];
  },
  set: function (target, key, value) {
    if (key === 'text') {
      span.innerHTML = value;
      input.value = input.value === value ? input.value : value;
      return (target[key] = value);
    }
  },
};
const inputProxy = new Proxy(obj, handler);

input.addEventListener('keyup', function (e) {
  inputProxy.text = e.target.value;
  console.log(inputProxy.text);
});
inputProxy.text = '小滴课堂';
