import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/auth/Login';


const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;