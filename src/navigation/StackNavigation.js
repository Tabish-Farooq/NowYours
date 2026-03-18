import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StartingScreen from '../screens/AuthorizationScreens/StartingScreen'
import RegisterScreen from '../screens/AuthorizationScreens/RegisterScreen'
import LoginScreen from '../screens/AuthorizationScreens/LoginScreen'
import BottomTabNavigation from './BottomTabNavigation'

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

         <Stack.Screen name="MainApp" component={BottomTabNavigation} />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default StackNavigation