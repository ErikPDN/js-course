document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    loadPage(el.getAttribute('href'));
  }
})

async function loadPage(url) {

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro: ' + response.status);

    const html = await response.text();
    document.querySelector('.content').innerHTML = html;
  } catch (error) {
    console.error(error);
  }


  // fetch(url)
  //   .then((response) => {
  //     if (response.status !== 200) throw new Error('Erro 404');
  //     return response.text();
  //   }).then((response) => {
  //     document.querySelector('.content').innerHTML = response;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
}
