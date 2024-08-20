// 1. Importa el módulo express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// 2. Crea una instancia de una aplicación express
const app = express()

// 3. Define el puerto en el que el servidor escuchará
const PORT = 3000

// 4. Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

// 5. Define una ruta básica GET
app.get('/', (request, response) => {
    response.send('¡Hola, mundo!')
})

// 6. Define una ruta para manejar el POST del formulario
app.post('/submit_homework_form', (request, response)=>{
    const {nombre, email, duda} = request.body
    console.log(`Nombre: ${nombre}, Email: ${email}, Duda: ${duda}`)
    response.json({ message: 'Formulario recibido con éxito' })
})

// 7. Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})