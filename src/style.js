import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './assets/constants/color';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;
export const styles = StyleSheet.create(
    {
        //style con
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: '#ffffff',
      justifyContent: "center",
      width:screenDimensions
    },
    logo:{
      flex: 2,
      justifyContent:"center",
      alignItems:"center"
  
    },
    logincontent:{
      backgroundColor:"red",
      flex: 3,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20,
      paddingHorizontal: 5,
      gap: 10
      
    },
    forgotpassword:{
      flex: 1,
      backgroundColor: "yellow"
    },
    signupbutton:{
      flex: 1,
      backgroundColor:"#dadada"
    },
    logofooter:{
      flex: 1,
      backgroundColor:"blue"
    },
    imagelogo:{
      width:100,
    }
 
    
  
  }
  );
  
  