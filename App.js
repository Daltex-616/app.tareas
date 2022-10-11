import React from "react";
import { Text , TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskFomScreen from "./pantalla/TaskFomScreen"
import HomeScreen from "./pantalla/HomeScreen";


const stack = createNativeStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
      <stack.Navigator>
      
        <stack.Screen name="Home" component={HomeScreen}
        options={ ({navigation}) => ({
          title:"Aplicacion de Tareas",
          headerStyle: {backgroundColor: "#222f3e"},
          headerTitleStyle:{ color:"#ffffff"},
          headerRight: () => (
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Tareas")}>
              <Text style={{color:"#ffffff", marginRight:20, fontSize:15}}>Nueva</Text>
            </TouchableOpacity>
          )
          })} />
        <stack.Screen name="Tareas" component={TaskFomScreen} 
          options={{
           title:"Crear nueva tarea",
           headerStyle:{
            backgroundColor:"#222f3e"
           },
           headerTitleStyle:{color:"#ffffff"},
           headerTintColor:"#ffffff"
          }} 
          />
       

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App