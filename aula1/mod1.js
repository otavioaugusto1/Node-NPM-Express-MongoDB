const nome = "Otávio";
const sobrenome = "Augusto"

const falaNome = () => {
  console.log(nome, sobrenome)
}
// assim
module.exports.nome = nome;
// ou assim (tanto faz)
//exports.nome = nome
exports.falaNome = falaNome;