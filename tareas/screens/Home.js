import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import ListaTareas from '../Componentes/ListaTareas';
import { tareasData } from '../data/tareas';
import {useNavigation} from '@react-navigation/native'; //para poder navegar entre pantallas

export default function Home() {
    //Creo un array nuevo para ordenarlo y que las tareas completadas queden al final. Luego paso este array a la lista de hoy
    const [localData, setLocalData] = React.useState(
        tareasData.sort((a,b) => {return a.isCompleted - b .isCompleted})
    );
    const [ocultas, setOcultas] = React.useState(false);
    //Traigo el hook de navegacion
    const navigation = useNavigation();

    //Manejo cuando mostrar las tareas terminadas
    const ocultarTareas = () => {
      if(ocultas){
        setOcultas(false)
        setLocalData(tareasData.sort((a,b) => {return a.isCompleted - b .isCompleted}))//Traigo de nuevo el componente de tareas y lo ordeno.
      }  else{
        setOcultas(true)
        setLocalData(localData.filter(tarea => !tarea.isCompleted))
      }
    }
    return (
        <SafeAreaView style={styles.container}>
          <Image source={{uri: 'https://telefe-static.akamaized.net/media/18243565/top-gun-maverick.jpg?width=888&height=500&mode=crop'}}
                 style={styles.pic}
                 />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Hoy</Text>
             <TouchableOpacity onPress={ocultarTareas}>
                <Text style={{color: '#3478f6'}}>{ocultas ? "Mostrar ocultas." : "Ocultar tareas."}</Text>
             </TouchableOpacity>
          </View>
          <ListaTareas tareasData={localData.filter(tarea => tarea.isToday)}></ListaTareas>
          <Text style={styles.title}>Mañana</Text>
          <ListaTareas tareasData={tareasData.filter(tarea => !tarea.isToday)}></ListaTareas>
          <TouchableOpacity onPress={() => navigation.navigate("Add")} style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15
     },
     pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'        
       },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 50,
        right: 20,
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -6,
        left: 9,
    },
  });