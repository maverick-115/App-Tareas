import { View, Text, TouchableOpacity,StyleSheet, TextInput, Switch, Button } from 'react-native'
import React from 'react'
import  DateTimePicker  from '@react-native-community/datetimepicker';


export default function AddTarea() {
  //Declaro las variable cons useState para que la pantalla se refresque cuando hay un cambio
    const [name, setName] = React.useState('');
    const [time, setTime] = React.useState(new Date(Date.now()));
    const [timePicker, setTimePicker] = React.useState(false);//variable para mostrar o esconder el picker
    const [isToday, setIsToday] = React.useState(false);
    const [pickerTime, setPickerTime] = React.useState('09:00');//Texto que aparecera en el TimePicker

    const pickerButton = pickerTime.toString();
    // 
    function showTimePicker() {
        setTimePicker(true);
      };
 
      function onTimeSelected(event, value, pickerButton) {
        setTime(value);
        setTimePicker(false);
        //Armo el striing para que en el picker no se vean los segundos.
        const h = String(value.getHours()).padStart(2,'0');
        const m = String(value.getMinutes()).padStart(2,'0');
        pickerButton = h.concat(':', m);
        console.log("tiempo", pickerButton);
        setPickerTime(pickerButton);

      };
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar tarea</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Nombre</Text>

        <TextInput
            style={styles.textInput}
            placeholder="Tarea"
            placeholderTextColor="#00000030"
            onChange={(text) => {setName(text)}}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hora</Text>
    
           {timePicker && (
             <DateTimePicker
             value={time}
             mode={'time'}
             display={Platform.OS === 'ios' ? 'spinner' : 'default'}
             is24Hour={true}
             onChange={onTimeSelected}
          />
        )}
        {!timePicker && (
          <View style={{ margin: 10 }}>
            <Button title={pickerButton} color="black" onPress={showTimePicker} />
          </View>
        )}

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hoy</Text>
        <Switch
            value={isToday}
            onValueChange={(value) => {setIsToday(value)}}
            />
     </View>
     <TouchableOpacity  style={styles.button}>
        <Text style={{color: 'white'}}>Listo</Text>
     </TouchableOpacity>
     <Text style={{color:'#00000060'}}>Si apagas el hoy, la tarea sera considerada para mañana.</Text>

    </View>
  )
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: "#F7F8FA",
            paddingHorizontal: 30,
        },
        title: {
            fontSize: 34,
            fontWeight: 'bold',
            marginBottom: 35,
            marginTop: 10,
        },
        inputContainer:{
            justifyContent: 'space-between',
            flexDirection: "row",
            paddingBottom: 30,
        },
        inputTitle: {
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 24,
        },
        textInput: {
            borderBottomColor: '#00000030',
            borderBottomWidth: 1,
            width:'75%'
        },
        button: {
            marginTop: 30,


            marginBottom: 15,
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            height: 46,
            borderRadius:11.
        },
    }
)