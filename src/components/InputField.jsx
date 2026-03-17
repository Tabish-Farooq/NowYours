import React, { forwardRef } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Colors } from '../theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'

const InputField = forwardRef(({
  placeholder,
  keyboardType,
  data,
  setData,
  icon,
  returnKeyType,
  onSubmitEditing,
  secureTextEntry,
  noMargin
}, ref) => {

  return (

    <View style={[
      styles.inputContainer,
      noMargin && { marginBottom: 0 }   // ⭐ important change
    ]}>

      <Icon
        name={icon}
        size={20}
        color={Colors.placeholder}
        style={styles.icon}
      />

      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={data}
        onChangeText={setData}
        keyboardType={keyboardType}
        style={styles.inputText}
        placeholderTextColor={Colors.placeholder}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
      />

    </View>

  )
})

const styles = StyleSheet.create({

  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'90%',
    alignSelf:'center',
    backgroundColor:Colors.input,
    borderRadius:8,
    borderWidth:1,
    borderColor:Colors.placeholder,
    paddingHorizontal:10,
    marginBottom:20   // default spacing
  },

  icon:{
    marginRight:8
  },

  inputText:{
    flex:1,
    height:50
  }

})

export default InputField