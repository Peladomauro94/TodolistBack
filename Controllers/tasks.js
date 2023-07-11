// Libreria que nos permite acceder a los datos y realizar las operaciones
const taskService = require('../Services/Cruds/tasksCrud')
const taskValidators = require('../Validators/taskValidator')


exports.read = async (req, res) =>{
   //se escribe la logica de negocios
    try{
        const task = await taskService.getAll()
        res.send(task)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al obtener información de la base de datos"})
    }
    
}


exports.readOne = async (req, res) =>{
    try{
        const id= req.params.id
        const taskId = await taskService.getById(id)
        if(!taskService.getById(id)){
            res.send({ error: 'No existe una tarea con ese id'})
        }else {
            res.send(taskId)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al obtener información de la base de datos"})
    }
        
    }





exports.create = async (req, res) =>{
    try{
        const {titulo, completado} = req.body
        const errores = taskValidators.validateTask(titulo, completado)
        if (errores.length > 0){
            return res.status(400).json({ errores })
        }
        const data = {titulo, completado};
        const task = await taskService.create(data)
        res.send('La tarea fue creada con éxito')
    } catch (error){
        console.error(error)
        res.status(500).json({ error: 'Error al crear' })
    }
   
}


exports.update = async (req, res) =>{
    try{
        const {titulo, completado} = req.body
        const id = req.params.id
        let task = {};
        if (titulo) {
          task = {...task, titulo};
        }
        if (completado) {
            task = {...task, completado};
        }
        const data = {id, task}
        await taskService.update(data);
        res.send('La tarea ha sido actualizada con éxito.');
    }  catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar.' });
      }}

    
    


exports.del = async (req, res) =>{
    try {
        const id = req.params.id
        await taskService.remove(id)
        res.send({ message: `La tarea ${id} fue borrada con éxito`})
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar'})
    }
    
    
}

