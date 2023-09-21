
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
  getAuth
} from 'firebase/auth';

let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });

  } catch (error) {
    console.log('Error initializing app: ' + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}
export const authService = getAuth(app);


export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
registerRootComponent(App);
