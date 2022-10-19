import {connect} from "../database.js"


export const getTasks = async(req,res)=>{
    const conection = await connect()
    const [rows]= await conection.query("SELECT * FROM tasks")
    res.json(rows)
}
export const getTask = async (req,res)=>{
    const conection = await connect()
    const [rows] = await conection.query("SELECT * FROM tasks WHERE id = ?",
    [req.params.id])
    res.json(rows[0])
    
}
export const getTaskCount = async (req,res)=>{
    const conection = await connect();
    const [rows] = await conection.query("SELECT COUNT(*) FROM tasks")
    res.json(rows[0]["COUNT(*)"])
}
export const saveTask = async (req,res)=>{
    const conection = await connect()
    const [result] = await conection.query("INSERT INTO tasks(title, descripcion) VALUES (?,?)",[
        req.body.title,
        req.body.descripcion
    ])
    res.json({
        id:result.insertId,
        ...req.body,
    })
    console.log(result)
}
export const deleteTask =async (req,res)=>{
    const conection = await connect()
    await conection.query("DELETE FROM tasks WHERE id = ?",[
        req.params.id
    ])
    res.sendStatus(204)
}
export const updateTask = async (req,res)=>{
    const conection = await connect()
    await conection.query("UPDATE tasks SET ? WHERE id = ?",[
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}