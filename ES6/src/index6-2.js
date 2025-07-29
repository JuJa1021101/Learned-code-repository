// function request() {
//   axios.get('a.json').then((res) => {
//     console.log(res.data.data.data);
//     if (res.data.data.data) {
//       axios.get('b.json').then((res) => {
//         console.log(res.data.data.data);
//         if (res.data.data.data) {
//           axios.get('c.json').then((res) => {
//             console.log(res.data.data.data);
//           });
//         }
//       });
//     }
//   });
// }

// request();

// 准备状态
// const promise = new Promise((resolve, reject) => {});

// console.log(promise);

// 成功状态
// new Promise((resolve, reject) => {
//   resolve('成功');
// }).then(
//   (res) => {
//     console.log(res);
//   },
//   () => {}
// );

// 失败状态
// new Promise((resolve, reject) => {
//   reject('失败');
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function requestA() {
//   return new Promise((resolve, reject) => {
//     axios.get('a.json').then((res) => {
//       if (res && res.status === 200) {
//         resolve(res.data.data.data);
//       } else {
//         reject('a接口请求失败');
//       }
//     });
//   });
// }

// function requestB() {
//   return new Promise((resolve, reject) => {
//     axios.get('b.json').then((res) => {
//       resolve(res.data.data.data);
//     });
//   });
// }
// function requestC() {
//   return new Promise((resolve, reject) => {
//     axios.get('c.json').then((res) => {
//       resolve(res.data.data.data);
//     });
//   });
// }

// function request() {
//   requestA()
//     .then((res) => {
//       console.log(res);
//       return requestB();
//     })
//     .then((res) => {
//       console.log(res);
//       return requestC();
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// request();

// function a() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole('请求1');
//     }, 2000);
//   });
// }

// function b() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole('请求2');
//     }, 500);
//   });
// }

// function c() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole('请求3');
//     }, 1000);
//   });
// }

// Promise.all([b(), a(), c()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([a(), b(), c()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log(111);

setTimeout(() => {
  console.log(222);
}, 2000);

new Promise((resolve, reject) => {
  console.log(333);
  setTimeout(() => {
    resolve();
  }, 1000);
}).then((res) => {
  console.log(444);
});
