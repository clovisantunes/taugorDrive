import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import { theme } from '../styles/theme';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

export type StackPramsList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: {
    userEmail: string;
  };
}
const Stack = createStackNavigator<StackPramsList>();

const routeOptions = {
  headerShown: false
}

export default function Routes() {
  return (
    <ThemeProvider value={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={routeOptions} />
        <Stack.Screen name="SignIn" component={SignIn} options={routeOptions} />
        <Stack.Screen name='SignUp' component={SignUp} options={routeOptions} />
        <Stack.Screen name='Home' component={Home} options={routeOptions} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}