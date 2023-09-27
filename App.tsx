
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/AppRoutes";
import { firebaseConfig } from "./firebaseConfig";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeApp,
  getApp,
  getApps
} from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence ,
} from 'firebase/auth';


export const appService = initializeApp(firebaseConfig)
const auth = initializeAuth(appService, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
registerRootComponent(App);
