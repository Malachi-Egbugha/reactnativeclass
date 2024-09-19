import React from 'react'
import {  Text, View, TextInput, Image, SafeAreaView, Dimensions, Button } from 'react-native';
import logo from "../assets/images/logos.png";
import { styles } from '../style';
import Textinputcomponent from '../components/textinputcomponents/textinputcomponent';
import CustomButton from '../components/CustomButton/CustomButton';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;


const Login = () => {
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
       
                 
               <Textinputcomponent labeltext="Enter your Email" />     
               <Textinputcomponent labeltext="Enter your Password" />     
  
        
      </View>
      <View style={styles.signupbutton}>
       <CustomButton labeltext = "Signup"/>
        
        </View>
      <View style={styles.forgotpassword}></View>
     
      <View style={styles.logofooter}></View>
     
    </View>
    </SafeAreaView>
  )
}

export default Login