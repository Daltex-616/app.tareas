import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import Layout from '../componentes/Layout'
import { saveTasks,getTask, updateTask } from "../api.js";

const TaskFomScreen = ({navigation, route}) =>{
    
    const [task, setTask] = useState({
        title:"",
        descripcion:""
    })
    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) =>setTask({...task, [name]:value})
    const handleSumit =async () => {

        try {
            if (!editing){
                await saveTasks(task)
           
            }else{
                await updateTask(route.params.id,task)
            }
            navigation.navigate("Home")
            
        } catch (error) {
            
        }
        
    }
    useEffect(() => {
        if(route.params && route.params.id){
            navigation.setOptions({headerTitle:"Actualizar Tarea"});
            setEditing(true);
            
            (async() => {
                const task = await getTask(route.params.id)
                setTask({title:task.title, descripcion: task.descripcion})
            })();
        }
    }, [])
    
    return(
        <Layout>
            <TextInput 
                style={style.input}
                placeholder='Escribir Titulo'
                placeholderTextColor="#808B96"
                onChangeText={(text) => handleChange("title",text)}
                value={task.title}

            />
            <TextInput
            style={style.input}
                placeholder="Escribir Descripcion"
                placeholderTextColor="#808B96"
                onChangeText={(text) => handleChange("descripcion",text)}
                value={task.descripcion}

            />
            {
                !editing ? (
                    <TouchableOpacity style={style.buttonSave} onPress={handleSumit}>
                        <Text style={style.buttonText}>Guardar Tarea</Text>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity style={style.buttonUpdate} onPress={handleSumit}>
                        <Text style={style.buttonText}>Actualizar Tarea</Text>
                    </TouchableOpacity>
                )
            }
            
        </Layout>
    )
}

const style = StyleSheet.create({
    input:{
        width:"90%",
        marginBottom:7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#10ac84",
        height: 35,
        color: "#ffffff",
        padding: 4,
        textAlign:"center",
        borderRadius: 5
    },
    buttonSave:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:10,
        backgroundColor: "#10ac84",
        width: "90%"
    },
    buttonText:{
        color:"#ffffff",
        textAlign:"center"
    },
    buttonUpdate:{
        padding:10,
        paddingBottom:10,
        borderRadius: 5,
        marginBottom:3,
        backgroundColor:"#e58e26",
        width:"90%"
    }
    
})

export default TaskFomScreen