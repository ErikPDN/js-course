function rand(min, max) {
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
      resolve(msg);
    }, time);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//   // 'first value',
//   wait('promise 1', rand(1, 5)),
//   wait('promise 2', rand(1, 5)),
//   wait('promise 3', rand(1, 5)),
//   // wait(1000, 1000),  // faz todas as outras promises serem rejeitadas
//   // 'last value'
// ];

// Promise.race(promises)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })

function downloadPage() {
  const inCache = true;

  if (inCache) {
    // return Promise.resolve('Página em cache');
    return Promise.reject('Página em cache');
  }

  return wait('Baixando página', rand(1, 3));
}

downloadPage()
  .then((page) => {
    console.log(page);
  })
  .catch((error) => {
    console.log('Erro: ' + error);
  });
