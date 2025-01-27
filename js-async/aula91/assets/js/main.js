// fetch('pessoas.json')
//   .then(response => response.json())  // response.json() retorna uma promise
//   .then(json => loadElementsInPage(json));

axios('pessoas.json')
  .then(response => loadElementsInPage(response.data));

function loadElementsInPage(people) {
  const table = document.createElement('table');
  for (let person of people) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = person.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = person.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = person.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector('.result');
  result.appendChild(table);
}
