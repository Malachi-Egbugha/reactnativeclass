import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../assets/constants/color';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;
export const styles = StyleSheet.create(
  {

input:{
    width:"100%",
    borderWidth : 1,
    borderRadius: 7,
    height: 50,
    borderColor : "#000000",
 
  },
  inputparent:{
    marginBottom: 10,
    width: "80%",
    padding:5,
    justifyContent:"center",
    alignItems: "center"

  },
  label:{
    textAlign: "left", 
    width:"100%",
    fontWeight: 20
  }
  }
)