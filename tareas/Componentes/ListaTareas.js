import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Tarea from './Tarea'

export default function ListaTareas({tareasData}) {
  return (
    // Le paso mi arreglo de tareas, le paso al key que id sera quien identificara a cada item y le digo como renderizar. Renderizo un componente donde diseñare como se ve.
    <FlatList data={tareasData}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => <Tarea {...item}/>}
    />
  )
}