import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();
export function BaseNavigator(){
    return (
    <Stack.Navigator >
    <Stack.Screen name="Login" component={Login} 
   />
    <Stack.Screen name="Home"  component={Home}
    options={{ 
     headerRight: () =>(
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
  
     ),
     headerShown: false,
     headerTitle: ""
    }}
    />
  </Stack.Navigator>
    )
  }