// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);

axios.get('a.json').then((res) => {
  console.log(res.data.data.data);
});
