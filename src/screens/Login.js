import React from 'react'
import {  Text, View, TextInput, Image, SafeAreaView, Dimensions, Button, Pressable } from 'react-native';
import logo from "../assets/images/logos.png";
import { styles } from '../style';
import Textinputcomponent from '../components/textinputcomponents/textinputcomponent';
import CustomButton from '../components/CustomButton/CustomButton';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;


const Login = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
        style={styles.imagelogo}
        resizeMode='contain'
        source={logo}
        />
        
      </View>
      <View>
      <Text style={styles.loginheader} >
          REACT NATIVE
        </Text>
      </View>
      <View style={styles.logincontent}>
       
                 
               <Textinputcomponent labeltext="Enter your Email" issecure={false} />     
               <Textinputcomponent labeltext="Enter your Password" issecure={true}/>     
  
        
      </View>
      <View style={styles.signupbutton}>
      
       <CustomButton labeltext = "Login"/>
        
        </View>
      <View style={styles.forgotpassword}>
        <Text style={styles.noaccount}>Dont have an account?</Text>
        <Pressable onPress={()=>navigation.navigate("Signup")} ><Text  style={styles.signup}>Signup</Text></Pressable>
      </View>
     
      <View style={styles.logofooter}>
       
      </View>
     
    </View>
    </SafeAreaView>
  )
}

export default Login