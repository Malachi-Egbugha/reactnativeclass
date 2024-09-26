import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import {BaseNavigator} from './src/navigation/BaseNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function MyTab(){
  return(
  <Tab.Navigator>
    <Tab.Screen name="Dashbaord" component={Signup}/>
    <Tab.Screen name="Login" component={Login} />

  </Tab.Navigator>
  )
}
function MyDrawer(){
  return(
    <Drawer.Navigator >
         
          <Drawer.Screen name="Dashboard"  component={Signup}
          options={{ 
           headerRight: () =>(
            <TouchableOpacity>
              <Text>Hello</Text>
            </TouchableOpacity>

           ),
           headerTransparent: true,
           headerTitle: ""
          }}
          />
      </Drawer.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
     <BaseNavigator/>
    </NavigationContainer>

    
 );
}

