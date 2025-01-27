function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('Erro');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// permite chamar as funções de forma sequencial sem aninhar callbacks
wait('Primeira mensagem', genRandom(1000, 3000))
  .then(res => {
    console.log(res);
    return wait('Segunda mensagem', genRandom(1000, 3000));
  })
  .then(res => {
    console.log(res);
    return wait(1, genRandom(1000, 3000));
  })
  .catch(e => {
    console.log('Erro', e)
  });
// wait('Segunda mensagem', genRandom(1000, 3000));
// wait('Terceira mensagem', genRandom(1000, 3000));

