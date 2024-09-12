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
      backgroundColor: '#ff0000',
      justifyContent: "center",
      width:screenDimensions
    
    },
    logo:{
      flex: 3,
      backgroundColor:colors.primary,
      justifyContent:"center",
      alignItems:"center"
  
    },
    logincontent:{
      flex: 2,
      backgroundColor: "0000ff"
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
  
  