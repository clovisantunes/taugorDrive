import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from '@react-navigation/native';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { theme } from '../styles/theme';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';

export type StackPramsList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  HomeScreen: {
    email: string;
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
        <Stack.Screen name="Home" component={Home} options={routeOptions} />
        <Stack.Screen name="SignIn" component={SignIn} options={routeOptions} />
        <Stack.Screen name='SignUp' component={SignUp} options={routeOptions} />
        <Stack.Screen name='HomeScreen' component={HomeScreen } options={routeOptions} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}