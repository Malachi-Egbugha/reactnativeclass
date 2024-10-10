import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import  NetInfo from '@react-native-community/netinfo'

const Network = () => {
    const [connect, isConnectedstate] = useState(true);
    
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener((state)=>{
           
            if(state.isConnected){
             isConnectedstate(true)
            }
            else{
             isConnectedstate(false);
            }
             
        
         });
       
        return () => {
			unsubscribe();
		};
        

    },[])
  return (
    <View>
        {connect?
      <Text>Connect</Text>:<Text>Disconnected</Text>
    }
    </View>
  )
}

export default Network