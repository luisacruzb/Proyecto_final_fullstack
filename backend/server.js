// Importa el módulo express
const express = require('express')

// Crea una instancia de una aplicación express
const app = express()

// Define el puerto en el que el servidor escuchará
const PORT = 3000

// Define una ruta básica
app.get('/', (request, response) => {
    response.send('¡Hola, mundo!')
})

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})