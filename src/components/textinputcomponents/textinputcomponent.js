
import { View, Text, TextInput } from 'react-native'
import React from 'react';
import { styles } from './textinputcomponentstyle';

const textinputcomponent = ({labeltext}) => {
  return (
    <View style={styles.inputparent}>
    <Text style={styles.label}>{labeltext}:</Text>
    <TextInput
    style={styles.input}
    />
</View>
  )
}

export default textinputcomponent