import express from 'express';
import morgan from 'morgan'; 
import mongoConnect from './config/Database.js';

const app = express();

app.use(morgan('dev'));
// Configuración de rutas y middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Conexion a Mongodb
mongoConnect();


export default app