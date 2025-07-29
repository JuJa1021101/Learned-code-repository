// async function xd() {
//   await console.log(1);
// }

// xd();

function requestA() {
  return new Promise((resolve, reject) => {
    axios.get('a.json').then((res) => {
      setTimeout(() => {
        resolve(res);
        console.log('aaa');
      }, 1000);
    });
  });
}

function requestB() {
  return new Promise((resolve, reject) => {
    axios.get('b.json').then((res) => {
      setTimeout(() => {
        resolve(res);
        console.log('bbb');
      }, 1000);
    });
  });
}

function requestC() {
  return new Promise((resolve, reject) => {
    axios.get('c.json').then((res) => {
      setTimeout(() => {
        resolve(res);
        console.log('ccc');
      }, 1000);
    });
  });
}

async function xd() {
  const resA = await requestA();
  const resB = await requestB();
  const resC = await requestC();
}

xd();
