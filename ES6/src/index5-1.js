// function xd(a) {
//   const b = a || '小滴';
//   console.log(b);
// }

// xd('');

// function xd(a, b = 4) {
//   console.log(a + b);
// }

// xd(1, '');

// function xd(...rest) {
//   for (let i of rest) {
//     console.log(i);
//   }
// }

// xd(1, 2, 3);

function xd(a, b, c) {
  console.log(a, b, c);
}

xd(...[1, 2, 3]);
