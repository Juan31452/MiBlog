import app from "./app.js"
const port = 3000;

//http://localhost:3000
app.get("/",(req,res) =>{
  res.send('Hola Mundo');
});

//http://localhost:3000/ruta1
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
app.listen(port, () => {
    console.log(`Conectado en el puerto:${port}`);
  });

