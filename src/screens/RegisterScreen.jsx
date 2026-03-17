import {
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
 TouchableWithoutFeedback,
 Keyboard
} from 'react-native'

import React, { useRef } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputField from '../components/InputField'
import { Colors } from '../theme/Colors'
import SubmitBtn from '../components/SubmitBtn'

import { Formik } from 'formik'
import * as Yup from 'yup'

const RegisterSchema = Yup.object({

 name: Yup.string().required("*Name is required"),

 email: Yup.string()
  .email("*Enter valid email")
  .required("*Email is required"),

 phone: Yup.string().required("*Phone is required"),

 password: Yup.string()
  .min(6, "*Password must be 6 characters")
  .required("*Password is required"),

 confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], "*Passwords must match")
  .required("*Confirm your password")

})

const RegisterScreen = ({ navigation }) => {

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

     <Formik
      initialValues={{
       name: "",
       email: "",
       phone: "",
       password: "",
       confirmPassword: ""
      }}

      validationSchema={RegisterSchema}

      onSubmit={(values) => {
       console.log(values)
       navigation.navigate("Login")
      }}
     >

      {({
       handleChange,
       handleSubmit,
       values,
       errors
      }) => (

       <>
        <View style={styles.inputView}>

         {/* NAME */}
         <InputField
          placeholder="Full Name"
          data={values.name}
          setData={handleChange("name")}
          icon="person-outline"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          noMargin={!!errors.name}
         />

         {errors.name && (
          <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{errors.name}</Text>
          </View>
         )}

         {/* EMAIL */}
         <InputField
          ref={emailRef}
          placeholder="Email"
          data={values.email}
          setData={handleChange("email")}
          icon="mail-outline"
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current.focus()}
          noMargin={!!errors.email}
         />

         {errors.email && (
          <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{errors.email}</Text>
          </View>
         )}

         {/* PHONE */}
         <InputField
          ref={phoneRef}
          placeholder="Phone Number"
          data={values.phone}
          setData={handleChange("phone")}
          icon="call-outline"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          noMargin={!!errors.phone}
         />

         {errors.phone && (
          <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{errors.phone}</Text>
          </View>
         )}

         {/* PASSWORD */}
         <InputField
          ref={passwordRef}
          placeholder="Password"
          data={values.password}
          setData={handleChange("password")}
          icon="lock-closed-outline"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          noMargin={!!errors.password}
         />

         {errors.password && (
          <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{errors.password}</Text>
          </View>
         )}

         {/* CONFIRM PASSWORD */}
         <InputField
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
          data={values.confirmPassword}
          setData={handleChange("confirmPassword")}
          icon="lock-closed-outline"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
          noMargin={!!errors.confirmPassword}
         />

         {errors.confirmPassword && (
          <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          </View>
         )}

        </View>

        <SubmitBtn
         text={"Register"}
         style={{ marginTop: 10, width: '80%' }}
         backgroundColor={Colors.secondary}
         textColor="white"
         onPress={handleSubmit}
        />

       </>
      )}

     </Formik>

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

 mainView: {
  backgroundColor: '#ffffff',
  flex: 1
 },

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

 inputView: {
  marginTop: 25
 },

 errorContainer: {
  marginLeft: 25,
  marginBottom: 4
 },

 errorText: {
  color: 'red',
  fontSize: 12
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