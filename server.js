
require('dotenv').config()
// importar express y almacenarlo en una variable
const express = require('express')
const app = express()
// importar los rutas de la carpeta routes/tasks.js
const taskRoutes = require('./Routes/tasksRoutes')

const port = process.env.APP_PORT

app.use(express.json())

app.use('/', taskRoutes)

app.get('/', (req, res) =>{
    res.send('Bienvenidos a mis tareas')
})



app.listen(port, () =>{
    console.log(`La app se ejecuta en http://localhost:${port}`)
})