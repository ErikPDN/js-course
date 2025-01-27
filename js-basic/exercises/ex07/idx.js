const form = document.querySelector(".form")
const text = document.getElementById("text")

const listPeople = []

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o formulário de recarregar a página
    showDetails();
});

function showDetails() {
    const name = form.querySelector(".name").value
    const lastName = form.querySelector(".lastname").value
    const weigth = form.querySelector(".weigth").value
    const height = form.querySelector(".height").value

    text.innerHTML += `<p>${name} ${lastName} - Peso: ${weigth}kg, Altura: ${height}m</p>`;

    addPerson(name, lastName, weigth, height);

    form.reset();
}

function addPerson(name, lastName, weigth, height) {
    listPeople.push({ name, lastName, weigth, height });
    console.log(listPeople); // Para verificar o array no console
}


