let varA = 'A' // recebe B
let varB = 'B' // recebe C
let varC = 'C' // recebe A

let aux

console.log(`A=${varA} B=${varB} C=${varC}`)

aux = varA
varA = varB
varB = varC
varC = aux

console.log(`A=${varA} B=${varB} C=${varC}`)
