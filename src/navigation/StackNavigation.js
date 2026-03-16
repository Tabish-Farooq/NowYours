import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StartingScreen from '../screens/StartingScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
// import LoginScreen from '../screens/LoginScreen'
// import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Starting"
        screenOptions={{headerShown:false}}
      >

        <Stack.Screen
          name="Starting"
          component={StartingScreen}
        />

        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        />

        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default StackNavigation