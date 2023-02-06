import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo}  from '@expo/vector-icons' // Importo el Checkbox

export default function Checkbox({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {
  return isToday ? (//si esta completada se renderiza la paloma
    <TouchableOpacity style={isCompleted ? styles.checked : styles.unchecked}>
        {isCompleted && <Entypo name='check' size={16} color="#FAFAFA"/>}
    </TouchableOpacity>
  ) : (
    <View style={styles.isToday}></View>
  )
}
//dibujo los contornos
const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5

    },
    unchecked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .1,
        shadowRadius: 5,
        elevation: 5

    },
    isToday: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#262626',
        marginRight: 13,
        marginLeft: 15,
    }
   
})