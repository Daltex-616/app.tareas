import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Taskitem = ({task, handleDelete}) => {
  const navigation = useNavigation()
  return (
    <View style={style.itemcontainer}>
      <TouchableOpacity onPress={()=> navigation.navigate("Tareas",{id:task.id})}>
        <Text style={style.itemTitle}>{task.title}</Text>
        <Text style={style.itemTitle}>{task.descripcion}</Text>
      </TouchableOpacity>
    
    <TouchableOpacity 
      style={{backgroundColor:"#ee5253",padding: 7,borderRadius:5}}
      onPress={()=> handleDelete(task.id)}

    >
        <Text style={{color:"#fff"}}>Borrar</Text>
      </TouchableOpacity>
    </View>
  )
}
 const style = StyleSheet.create({
    itemcontainer:{
        backgroundColor:"#333333",
        padding:20,
        marginVertical:8,
        borderRadius:5,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    itemTitle:{
        color:"#ffffff"
    }
 })
export default Taskitem