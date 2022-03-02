function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, tempo)  
  })
}

esperaAi("Olá...", rand(1, 3))
.then(resposta => {
  console.log(resposta)
})
.catch()

// métodos
// promise.all promise.race promise.resolve promise.reject
const promises = [
  "Primeiro valor",
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  "Outro valor"
]
Promise.all(promises).then(function(dados){
  console.log(dados)
}).catch(function(error){
  console.log(error)
})