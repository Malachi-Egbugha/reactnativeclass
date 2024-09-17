import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, Dimensions } from 'react-native';
import logo from "./src/assets/images/logos.png";
import { styles } from './src/style';
import Textinputcomponent from './src/components/textinputcomponents/textinputcomponent';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen').width;


export default function App() {
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
      <Text>
          REACT NATIVE
        </Text>
      </View>
      <View style={styles.logincontent}>
       
                 
               <Textinputcomponent labeltext="Enter your Email" />     
               <Textinputcomponent labeltext="Enter your Password" />     
  
        
      </View>
      <View style={styles.forgotpassword}></View>
      <View style={styles.signupbutton}></View>
      <View style={styles.logofooter}></View>
     
    </View>
    </SafeAreaView>
 );
}

