function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('BAD VALUE');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, time);
  });
}

// wait('promise 1', rand(1, 5))
//   .then((value) => {
//     console.log(value);
//     return wait('promise 2', rand(1, 5));
//   }).then((value) => {
//     console.log(value);
//     return wait('promise 3', rand(1, 5));
//   }).then((value) => {
//     console.log(value);
//   })
//   .catch(e => console.log(e));

// utilizando async/await para simplificar o código acima
async function execute() {
  try {
    const fase1 = await wait('promise 1', rand(1, 5))
    console.log(fase1)

    const fase2 = await wait(1, rand(1, 5))
    console.log(fase2)

    const fase3 = await wait('promise 3', rand(1, 5))
    console.log(fase3)
  } catch (e) {
    console.log(e);
  }
}

execute();
