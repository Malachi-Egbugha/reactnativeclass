import {  Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './CustomButtonstyle'

const CustomButton = ({labeltext}) => {
  return (
    <Pressable style={styles.buttonparent} >
      <Text style={styles.buttontext}>{labeltext}</Text>
    </Pressable>
  )
}

export default CustomButton