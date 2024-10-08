import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './assets/constants/color';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;
export const styles = StyleSheet.create(
    {
        //style con
    /////login screen style////////////
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: '#aeaeae',
      justifyContent: "center",
      width:screenDimensions
    },
    logo:{
      flex: 2,
      justifyContent:"center",
      alignItems:"center"
  
    },
    logincontent:{
      flex: 3,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20,
      paddingHorizontal: 5,
      gap: 10
      
    },
    forgotpassword:{
      flex: 1,
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems:"center"
    },
    signupbutton:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    logofooter:{
      flex: 1,
      backgroundColor:"blue"
    },
    imagelogo:{
      width:100,
    },

    loginheader:{
      textAlign:"center",
      fontWeight: 900
      
    },
    noaccount:{
      fontSize: 14,
      textAlign: "center",
      color: "rgb(255,255,255)"

    },
    signup:{
      color:"#0000ff",
      fontWeight: 700,
      
    }

 
    
  
  }
  );
  
  