import express from 'express'
import morgan from 'morgan' 


const app = express()
app.use(morgan('dev'))
// Configuración de rutas y middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


export default app