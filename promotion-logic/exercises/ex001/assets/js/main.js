const form = document.getElementById('imc-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o formulário de recarregar a página
    calculateIMC();
});

function calculateIMC() {
    const weight = form.querySelector('.peso').value;
    const height = form.querySelector('.altura').value;

    if (!weight || !height) {
        exibirResultado('Preencha todos os campos', false);
        return;
    }

    const imc = weight / (height * height);

    let message = '';

    if (imc < 18.5) {
        message = 'Abaixo do peso';
    } else if (imc < 24.9) {
        message = 'Peso normal';
    } else if (imc < 29.9) {
        message = 'Sobrepeso';
    } else if (imc < 34.9) {
        message = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        message = 'Obesidade grau 2';
    } else {
        message = 'Obesidade grau 3';
    }

    exibirResultado(`Seu IMC é ${imc.toFixed(2)} - ${message}`, true);
    form.reset();
}


// Função para exibir o resultado
function exibirResultado(mensagem, sucesso) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = mensagem;
    resultadoDiv.style.backgroundColor = sucesso ? '#0a9396' : '#d00000'; // Cor diferente para mensagens de erro
    resultadoDiv.classList.add('mostrar'); // Mostra a div
}
