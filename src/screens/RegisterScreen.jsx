import {
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
 TouchableWithoutFeedback,
 Keyboard
} from 'react-native'

import React, { useState, useRef } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputField from '../components/InputField'
import { Colors } from '../theme/Colors'
import SubmitBtn from '../components/SubmitBtn'

const RegisterScreen = ({ navigation }) => {

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")

 // refs for focus jump
 const emailRef = useRef()
 const phoneRef = useRef()
 const passwordRef = useRef()
 const confirmPasswordRef = useRef()

 return (

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

   <KeyboardAwareScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
   >

    <View style={styles.mainView}>

     <View style={styles.circleView}>

      <Image
       source={require('../assets/bootsplash.png')}
       style={styles.circleImage}
      />

     </View>

     <Text style={styles.createAccount}>Create your account</Text>

     <View style={styles.inputView}>

      <InputField
       placeholder="Full Name"
       data={name}
       setData={setName}
       icon="person-outline"
       returnKeyType="next"
       onSubmitEditing={() => emailRef.current.focus()}
      />

      <InputField
       ref={emailRef}
       placeholder="Email"
       data={email}
       setData={setEmail}
       icon="mail-outline"
       returnKeyType="next"
       onSubmitEditing={() => phoneRef.current.focus()}
      />

      <InputField
       ref={phoneRef}
       placeholder="Phone Number"
       data={phone}
       setData={setPhone}
       icon="call-outline"
       returnKeyType="next"
       onSubmitEditing={() => passwordRef.current.focus()}
      />

      <InputField
       ref={passwordRef}
       placeholder="Password"
       data={password}
       setData={setPassword}
       icon="lock-closed-outline"
       returnKeyType="next"
       onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />

      <InputField
       ref={confirmPasswordRef}
       placeholder="Confirm Password"
       data={confirmPassword}
       setData={setConfirmPassword}
       icon="lock-closed-outline"
       returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
      />

     </View>

     <SubmitBtn
      text={"Register"}
      style={{ marginTop: 10, width: '80%' }}
      backgroundColor={Colors.secondary}
      textColor="white"
      onPress={() => navigation.navigate("Register")}
     />

     <View style={styles.loginRow}>

      <Text style={styles.already}>
       Already have an account?
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
       <Text style={styles.loginText}>
        Log in
       </Text>
      </TouchableOpacity>

     </View>

    </View>

   </KeyboardAwareScrollView>

  </TouchableWithoutFeedback>

 )
}

const styles = StyleSheet.create({

 circleView: {
  backgroundColor: '#FFFFFF',
  width: 100,
  height: 100,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#112353',
  alignSelf: 'center',
  marginTop: 30
 },

 circleImage: {
  width: 90,
  height: 90,
  resizeMode: 'contain'
 },

 createAccount: {
  textAlign: 'center',
  color: Colors.primary,
  fontSize: 26,
  fontWeight: '500',
  marginTop: 5
 },

 mainView: {
  backgroundColor: '#ffffff',
  flex: 1
 },

 inputView: {
  marginTop: 25
 },

 loginRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10
 },

 already: {
  fontSize: 15,
  color: '#777'
 },

 loginText: {
  fontSize: 15,
  color: Colors.primary,
  fontWeight: '600',
  marginLeft: 5
 }

})

export default RegisterScreen