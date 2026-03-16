import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import { Colors } from '../theme/Colors'
import SubmitBtn from '../components/SubmitBtn'

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.mainView}>

      <View style={styles.circleView}>
        <Image
          source={require('../assets/bootsplash.png')}
          style={styles.circleImage}
        />
      </View>

      <Text style={styles.createAccount}>Welcome Back</Text>

      {/* Input Fields */}
      <View style={styles.inputView}>

        <InputField
          placeholder="Email"
          data={email}
          setData={setEmail}
          icon="mail-outline"
        />

        <InputField
          placeholder="Password"
          data={password}
          setData={setPassword}
          icon="lock-closed-outline"
        />

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
        onPress={() => navigation.navigate("Register")}
      />

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
            marginBottom:5
          }}
          backgroundColor="#FFFFFF"
          textColor={Colors.placeholder}
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

  forgotRow: {
    alignItems: 'flex-end',
    width: '90%',
    alignSelf: 'center',
    marginTop: -13,
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

  /* GOOGLE BUTTON STYLES */

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