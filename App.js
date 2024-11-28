import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailSignInScreen from './src/screens/EmailSignInScreen';
import PasswordSignInScreen from './src/screens/PasswordSignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SetPasswordScreen from './src/screens/SetPasswordScreen';
import OtpScreen from './src/screens/OtpScreen';
import HomePage from './src/screens/AppHome/HomePage';
import SearchForDoctorsComponent from './src/screens/AppHome/SearchForDoctorsComponent';
import AudioCall from './src/screens/AppHome/AudioCall';
import DoctorsInfo from './src/screens/AppHome/DoctorsInfo';
import AppointmentDetails from './src/screens/AppHome/AppointmentDetails';
import PaymentMethodScreen from './src/screens/AppHome/PaymentMethodScreen';
import ApiScreen1 from './src/screens/ApiScreen1';
import ApiScreen2 from './src/screens/ApiScreen2';
import ApiComponent from './src/ApiComponent';
import ApiPhotosComponent from './src/ApiPhotosComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="ApiScreen1" component={ApiScreen1} /> */}
        {/* <Stack.Screen name="ApiScreen2" component={ApiScreen2} /> */}
        {/* <Stack.Screen name="ApiComponent" component={ApiComponent} /> */}
        {/* <Stack.Screen name="ApiPhotosComponent" component={ApiPhotosComponent} /> */}

        <Stack.Screen name="EmailSignInScreen" component={EmailSignInScreen} />
        <Stack.Screen name="PasswordSignInScreen" component={PasswordSignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SearchForDoctorsComponent" component={SearchForDoctorsComponent} />
        <Stack.Screen name="DoctorsInfo" component={DoctorsInfo} />
        <Stack.Screen name="AudioCall" component={AudioCall} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App