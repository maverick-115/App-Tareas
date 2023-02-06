import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native-stack'
import AddTarea from './screens/AddTarea';
// import {StyleSheet } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context'
import Home from './screens/Home';

//creo mi Stack de screens
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
            <Stack.Screen
        name="Add"
        component={AddTarea}
        options={{presentation:'modal'}}
      />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


