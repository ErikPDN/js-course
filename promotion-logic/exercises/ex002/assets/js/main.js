// const date = new Date();
// const dayWeak = date.getDay(); // Dia da semana (0 a 6)
// const dateWeak = date.getDate(); // Dia do mês
// const month = date.getMonth(); // Mês (0 a 11)
// const year = date.getFullYear(); // Ano completo
// const hours = String(date.getHours()).padStart(2, "0"); // Hora com dois dígitos
// const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutos com dois dígitos

// const months = [
//     "janeiro", "fevereiro", "março", "abril", "maio", "junho",
//     "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
// ];

// let dayWeakText = document.querySelector(".container h1");

// dayWeakText.innerHTML = "";

// switch (dayWeak) {
//     case 0:
//         dayWeakText.innerHTML = `domingo, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 1:
//         dayWeakText.innerHTML = `segunda-feira, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 2:
//         dayWeakText.innerHTML = `terça-feira, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 3:
//         dayWeakText.innerHTML = `quarta-feira, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 4:
//         dayWeakText.innerHTML = `quinta-feira, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 5:
//         dayWeakText.innerHTML = `sexta-feira, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
//     case 6:
//         dayWeakText.innerHTML = `sábado, ${dateWeak} de ${months[month]} de ${year} às ${hours}:${minutes}h`;
//         break;
// }

const h1 = document.querySelector("h1");
const date = new Date();
const options = {
    dateStyle: 'full', // Exibe a data completa (dia da semana, dia, mês e ano)
    timeStyle: 'short' // Exibe o horário no formato curto (horas e minutos)
};

// Usa toLocaleString para exibir data e hora juntas
h1.innerHTML = date.toLocaleString('pt-BR', options);
