// let list = [1, 2, 3];
// let a = list[0];
// let b = list[1];
// let c = list[2];
// console.log(a, b, c);

// let list = [1, 2, 3];

// let [a, b, c = 8] = list;

// console.log(a, b, c);

// let [a, , c] = list;
// console.log(a, other);

// let xd = { a: '小滴课堂', b: 'xdclass.net' };

// let { a: aa, b: bb } = xd;
// console.log(aa, bb);

function xd() {
  return {
    name: '小滴课堂',
    list: [
      {
        url: 'xdclass.net',
      },
    ],
  };
}

let {
  name: name1,
  list: [{ url: url1 }],
} = xd();

console.log(name1, url1);
