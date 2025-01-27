const randomNum = Math.floor(Math.random() * 100)
const numberId = document.getElementById("numberId")
const text = document.getElementById("text")

numberId.innerHTML = 
text.innerHTML = "" // limpa o texto que já está no html
text.innerHTML += `Raiz quadrada: ${Math.sqrt(randomNum)}<br/>`
text.innerHTML += `${randomNum} é inteiro: ${Number.isInteger(randomNum)} <br/>`
text.innerHTML += `${randomNum} é: NaN ${Number.isNaN(randomNum)}<br/>`
text.innerHTML += `Arredondando para baixo: ${Math.floor(randomNum)} <br/>`
text.innerHTML += `Arredondando para cima: ${Math.ceil(randomNum)} <br/>`
text.innerHTML += `Arredonando para duas casas decimais: ${randomNum.toFixed(2)} <br/>`
