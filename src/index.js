import app from "./app.js"
import mongoConnect from './config/Database.js';
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// puerto (obtenida desde las variables de entorno)
const puerto = process.env.PORT || 3000; // Utiliza el puerto 3000 si no se encuentra en .env

//Conexion a Mongodb
mongoConnect();


//http://localhost:3000
app.get("/",(req,res) =>{
  res.send('Hola Mundo');
});

//http://localhoscomt:3000/ruta1
app.get("/ruta1", (req, res) => {
  res.send('¡Hola desde otra ruta!');
});

// Ruta con parámetros , http://localhost:3000/usuario/Juan
app.get("/usuario/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Hola, usuario ${userId}!`);
});



// Middleware para manejar errores 404 (Not Found)
app.use((req, res, next) => {
  const error = new Error(`La ruta '${req.originalUrl}' no fue encontrada en el servidor.`);
  error.status = 404;
  next(error);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },
  });
});


// Iniciar el servidor y escuchar en el puerto especificado
app.listen(puerto, () => {
    console.log(`Conectado en el puerto:${puerto}`);
  });

