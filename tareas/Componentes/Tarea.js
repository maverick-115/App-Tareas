import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Checkbox from './Checkbox'

export default function Tarea({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {
  return (// Al chequear si estan completadas las tareas les dejo el mismo estilo pero agregando la linea que tacha y un cambio de color
    <View style={styles.container}>
        <Checkbox 
        id={id}
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        hour={hour}
        />
        <View> 
          <Text style={isCompleted ? [styles.text,{textDecorationLine: 'line-through', color: '#73737330'}] : styles.text}>{text}</Text>
          <Text style={isCompleted ? [styles.time,{textDecorationLine: 'line-through', color: '#73737330'}] : styles.time}>{hour}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time:{
        fontSize: 13,
        fontWeight: '500',
        color: '#a3a3a3'
    }
})