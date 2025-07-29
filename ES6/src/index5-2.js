// function xd() {
//   console.log(111);
// }

// const xd1 = (a) => {
//   return a;
// };

// xd();
// console.log(xd1(1));

// const xd = {
//   name: '小滴课堂',
//   fun: function () {
//     console.log(this);
//   },
// };

// xd.fun();

// const h3 = document.getElementById('h3');

// h3.addEventListener('click', () => {
//   console.log(this);
// });

// function Car(a) {
//   this.a = a;
// }

// const aa = new Car(1);
// console.log(aa);

// const Car1 = (a) => {
//   this.a = a;
// };

const aa = () => {
  console.log(arguments);
};

function bb() {
  console.log(arguments);
}
bb();

// aa();
