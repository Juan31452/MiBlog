import express from 'express';
import morgan from 'morgan'; 
import usuarioRouter from './routers/usuarios.router.js'

const app = express();


app.use(morgan('dev'));
app.use(express.json());//que reconozca formato json

//se llama rutras 
app.use('/home',usuarioRouter);

// Configuración de rutas y middlewares
app.use(express.urlencoded({ extended: false }));


export default app