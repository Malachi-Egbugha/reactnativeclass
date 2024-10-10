import { View, Text, ScrollView, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
//import React from 'react-native-m'
//import Map from 're'



const Signup = () => {
  const [isConnected, setConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
			setConnected(state.isConnected);
      if (!state.isConnected) {
				showAlert();
			}
		
		});
		return () => {
			unsubscribe();
		};
	}, []);
  const showAlert = () => {
		Alert.alert(
			'Internet Connection',
			'You are offline. Some features may not be available.'
		);
	};

  var data = [
    {name:"malachi", key:"1"},
    {name:"micheal", key:"2"},
    {name:"tobi", key:"3"},
    {name:"stephen", key:"4"},
    {name:"stephen", key:"4"},
    {name:"stephen", key:"4"},
  ]
 
  return (
    /*
    <View>
      <Text>Hell</Text>
      <FlatList
      data={data}
      renderItem={({item})=>{
        return(
        <View>
        <Text  style={{padding: 50, backgroundColor:"grey", margin: 10}}>{item.name}</Text>
      </View>
      
     
        )
      }}
      
      />

    </View>
    */
    <View>{isConnected ? <Text>Online</Text> : <Text>Offline</Text>}</View>
	
  )
}


export default Signup