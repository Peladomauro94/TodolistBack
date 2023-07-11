const db = require('../database')

const getAll = async () =>{
    return await db.select().from('tarea')
}

const getById = async(id) =>{
    return await db.select().from('tarea').where({id: id})
}

const create = async(data) =>{
    return await db("tarea").insert(data).returning("id")
}

const update = async(data) =>{
    return await db("tarea").where({id: data.id}).update(data.task).returning("id")
}

const remove = async(id) =>{
    return await db("tarea").where({id: id}).del()
}


module.exports = { getAll, getById, create, update, remove };