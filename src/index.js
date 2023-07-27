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

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Conectado en el puerto:${port}`);
  });