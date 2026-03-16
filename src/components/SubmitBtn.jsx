import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const SubmitBtn = ({
  text,
  onPress,
  style,
  textStyle,
  disabled = false,
  backgroundColor = '#112353',  // ← default color
  textColor = 'white',           // ← default text color
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btn,
        { backgroundColor },  
           // ← prop se override
        style,
        disabled && { opacity: 0.6 }
      ]}
    >
      <Text style={[styles.btnTxt, { color: textColor }, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {
    width: '90%',          // ← uncomment karo
    paddingVertical: 14,
    backgroundColor:'#112353',
    borderRadius: 8,
    alignSelf: 'center',   // ← uncomment karo
    justifyContent: 'center',
     elevation: 2, 
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
})

export default SubmitBtn