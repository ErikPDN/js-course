const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);  // GET
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      }

      reject(xhr.statusText);
    });
  });
};

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    loadPage(el.getAttribute('href'));
  }
});

async function loadPage(url) {
  // Passando um objeto com as configurações

  const obj = {
    method: 'GET',
    url: url,
  }

  // request(obj)
  //   .then((response) => {
  //     document.querySelector('.content').innerHTML = response;
  //   })
  //   .catch((error) => {
  //     document.querySelector('.content').innerHTML = 'Erro: ' + error;
  //   });

  try {
    const response = await request(obj);
    document.querySelector('.content').innerHTML = response;
  } catch (error) {
    document.querySelector('.content').innerHTML = 'Erro: ' + error;
  }
}
