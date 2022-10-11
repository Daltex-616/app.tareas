
const APi ="http://10.0.2.2:4000/tasks"
export const getTasks = async () =>{
    const res =  await fetch(APi)
    return await res.json()
    
}
export const getTask = async(id) =>{
    const res = await fetch(`${APi}/${id}`)
    return await res.json()
}
export const saveTasks = async(newTask) =>{
    const res = await fetch(APi,{
    method:"POST", 
    headers:{Accept:"application/json", "Content-Type":"application/json"},
    body: JSON.stringify(newTask)
})
return await res.json()
}

export const deleteTask = async id =>{
   await fetch(`${APi}/${id}`,{
        method:"DELETE",
    })
}

export const updateTask = async(id,newTask) =>{
    const res = await fetch(`${APi}/${id}`,{
        method:"PUT",
        headers:{Accept:"application/json", "Content-Type":"application/json"},
        body: JSON.stringify(newTask)
    })
    return res;
}
