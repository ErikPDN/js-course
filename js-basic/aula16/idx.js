const alunos = ["Erik", "Maria", "João"]
console.log(alunos[2])

alunos.push("Kelvia")
alunos.push("Kathielly")

console.log(alunos.slice(0, -1))

alunos[3] = "Joaquina"
console.log(alunos)

console.log(typeof alunos)  // é referido como instancia de objeto
console.log(alunos instanceof Array)