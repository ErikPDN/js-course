const elements = [
    { tag: "p", text: "Phrase 1" },
    { tag: "div", text: "Phrase 2" },
    { tag: "footer", text: "Phrase 3" },
    { tag: "section", text: "Phrase 4" }
];

// Seleciona o container principal
const container = document.querySelector(".container");

// Cria uma nova div para inserir os elementos
const newDiv = document.createElement("div");
newDiv.className = "newDiv"; // Adiciona uma classe à nova div
container.appendChild(newDiv); // Adiciona a nova div ao container

for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i]; // Desestrutura tag e text

    // Cria o elemento baseado no tipo de tag
    const newElement = document.createElement(tag);
    newElement.innerText = text; // Define o texto do elemento

    // Adiciona o novo elemento à div criada
    newDiv.appendChild(newElement);
}
