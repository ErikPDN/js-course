const paragraph = document.querySelector('.paragraph');

// NodeList não é um array
const nodeListParagraphs = paragraph.querySelectorAll('p'); 

const root = document.querySelector(':root');
const computedStyle = getComputedStyle(root);    // Obtém o estilo calculado
const backgroundColorBody = computedStyle.getPropertyValue('--primary-color'); // Pega a propriedade `background-color`

nodeListParagraphs.forEach((p) => {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
});