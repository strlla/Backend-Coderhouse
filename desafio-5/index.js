const http = require('http');

const server = http.createServer((req, res) => {
  
  const resultado = {
    id: getRandom(1,10),
    title: getRandom(1,10),
    price: getRandom(1,9999),
    thumbnail: `Foto ${getRandom(1,10)}`
  }
  res.end(JSON.stringify(resultado));
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

const getRandom = (min, max) => {
  return Math.random() * (max - min);
}

