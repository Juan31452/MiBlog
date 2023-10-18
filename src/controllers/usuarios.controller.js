import Usuario from '../models/usuario.js'

// Función para agregar un nuevo artículo
export const register = async (req, res) => {
  try {
    
    const {name, email, password} = req.body
 
    //Creamos el objeto Usuario
    const nuevoUsuario = new Usuario({
      name,
      email,
      password
    });

    console.log(nuevoUsuario); 

    await nuevoUsuario.save();//Se guarda

    res.send('Registro Guardado')
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el registro' });
  } 
}

export const login = (req, res) => {
    res.send('login')
}