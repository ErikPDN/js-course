// const date = new Date(0);  // 01/01/1970 inicio da unix age
// const plusThreeHours = new Date(60 * 60 * 3 * 1000);
// console.log(plusThreeHours.toString());
// console.log(date.toString());

// const date = new Date(2024, 10, 20, 14, 16, 44);  // passar pelo menos o ano e o mês
const date = new Date('2024-11-04T00:00:01');
console.log(date);
console.log("Dia", date.getDate());
console.log("Mês", date.getMonth());
console.log("Ano", date.getFullYear());