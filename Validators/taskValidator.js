const express= require('express')
const router = express.Router()

router.validateID = (id) => {
    let i = null;
    if (id === undefined || id === null || id <= 0) {
      return false;
    } else {
      i = tasks.findIndex((task) => {
        return task.id == id;
      });
      return (!i) ? false : true; 
    }
  };

  router.validateUser = () => {
      if (!data.usuario || data.usuario.trim() === "") {
       errores.push("El email es obligatorio");
      }
  }

  router.validateTask = (titulo, completado, data) => {
    const errores = [];
  
    if (!titulo || titulo.trim() === '') {
      errores.push('El nombre de la tarea es obligatorio');
    }
  
    if (!completado || completado === !Boolean) {
      errores.push('Error al ingresar valor');
    }

    return errores;
  };

  




module.exports = router