import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import { Colors } from '../theme/Colors'
import SubmitBtn from '../components/SubmitBtn'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object({
  email: Yup.string().required("*Email is required"),
  password: Yup.string().required("*Password is required")
})

const LoginScreen = ({ navigation }) => {

  return (
    <View style={styles.mainView}>

      <View style={styles.circleView}>
        <Image
          source={require('../assets/bootsplash.png')}
          style={styles.circleImage}
        />
      </View>

      <Text style={styles.createAccount}>Welcome Back</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values)
          navigation.navigate("Register")
        }}
      >

        {({ handleChange, handleSubmit, values, errors }) => (

          <>
            <View style={styles.inputView}>

              {/* EMAIL */}
             <InputField
  placeholder="Email"
  data={values.email}
  setData={handleChange("email")}
  icon="mail-outline"
  noMargin={!!errors.email}
/>

              {errors.email && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>
                    {errors.email}
                  </Text>
                </View>
              )}

              {/* PASSWORD */}
              <InputField
                placeholder="Password"
                data={values.password}
                setData={handleChange("password")}
                icon="lock-closed-outline"
                noMargin={!!errors.email}
              />

              {errors.password && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>
                    {errors.password}
                  </Text>
                </View>
              )}

              <View style={styles.forgotRow}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

            </View>

            <SubmitBtn
              text={"Login"}
              style={{ marginTop: 10, width: '80%' }}
              backgroundColor={Colors.primary}
              textColor="white"
              onPress={handleSubmit}
            />

          </>
        )}

      </Formik>

      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      {/* GOOGLE BUTTON */}
      <View style={styles.googleWrapper}>

        <Image
          source={require('../assets/googleIcon.png')}
          style={styles.googleIcon}
        />

        <SubmitBtn
          text={"Continue with Google"}
          style={{
            marginTop: 5,
            width: '100%',
            borderWidth: 1,
            borderColor: Colors.placeholder,
            backgroundColor: '#FFFFFF',
            paddingLeft: 15,
            marginBottom: 5
          }}
          backgroundColor="#FFFFFF"
          textColor="black"
          onPress={() => navigation.navigate("Register")}
        />

      </View>

      <View style={styles.loginRow}>
        <Text style={styles.already}>
          Don't have an account?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.loginText}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

    </View>
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
    justifyContent: 'center',
    marginLeft: 25,
    marginBottom: 4
  },

  errorText: {
    color: 'red',
    fontSize: 12
  },

  forgotRow: {
    alignItems: 'flex-end',
    width: '90%',
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 20
  },

  forgotText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500'
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 15
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },

  orText: {
    marginHorizontal: 10,
    color: '#777',
    fontSize: 14,
    fontWeight: '500'
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
    color: Colors.secondary,
    fontWeight: '600',
    marginLeft: 5
  },

  googleWrapper: {
    width: '80%',
    alignSelf: 'center',
    position: 'relative'
  },

  googleIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    position: 'absolute',
    left: 25,
    top: 20,
    zIndex: 10
  }

})

export default LoginScreen