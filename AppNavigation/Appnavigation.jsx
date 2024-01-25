import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Src/HomeScreen';
import AddTrip from '../Src/AddTrip';
import AddExpensesScreen from '../Src/addExpensesScreen';
import Login from '../Src/Auth/Login';
import BottomNavigation from './bottomNavigation';
import SplashScreen from '../Src/SplashScreen/SplashScreen';

import PopularServiceProvider from '../Src/popularServiceProvider/popularServiceProvider';
import Signup from '../Src/Auth/Signup';
import Profile from '../Src/Profile';

<<<<<<< HEAD
import CurrentLocation from '../Src/Map/CurrentLocation';
import Location from '../Src/Location';


import Changepass from '../Src/Userinfo/Changepass';
import UProfile from '../Src/Userinfo/UProfile';
import ServiceProviderInfo from '../Src/ServiceProviderInfo/Index';
import ServiceProviderAbout from '../Src/ServiceProviderInfo/serviceProviderAbout';
import Booking from '../Src/Booking/Index';
=======
import CurrentLocation from '../Screens/Map/CurrentLocation';
import Location from '../Screens/Location';
import RecptPending from '../Screens/Receipt/ReceiptPending';
import Changepass from '../Screens/Userinfo/Changepass';
import UProfile from '../Screens/Userinfo/UProfile';
import RecptComplete from '../Screens/Receipt/ReceiptComplete';
>>>>>>> b84e56726a06f0a53ffc036889683f60a0be0e32



const Stack = createNativeStackNavigator();
export default function Appnavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="RecptComplete" screenOptions={{animationEnabled:true}}>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}  />
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}  />
        <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup}  />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}  />
        <Stack.Screen options={{headerShown:false}} name="AddTrip" component={AddTrip} />
        <Stack.Screen options={{headerShown:false}} name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen options={{headerShown:false}} name="AddExpensesScreen" component={AddExpensesScreen} />
        <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen} />

        <Stack.Screen options={{headerShown:false}} name="Changepass" component={Changepass} />
        <Stack.Screen options={{headerShown:false}} name="UProfile" component={UProfile} />
        <Stack.Screen options={{headerShown:false}} name="RecptPending" component={RecptPending} />
        <Stack.Screen options={{headerShown:false}} name="RecptComplete" component={RecptComplete} />

        <Stack.Screen options={{headerShown:false}} name="PopularServiceProvider" component={PopularServiceProvider} />

        <Stack.Screen options={{headerShown:false}} name="Location" component={Location} />
        <Stack.Screen options={{headerShown:false}} name="CurrentLocation" component={CurrentLocation} />
        <Stack.Screen options={{headerShown:false}} name="ServiceProviderInfo" component={ServiceProviderInfo} />
        <Stack.Screen options={{headerShown:false}} name="ServiceProviderAbout" component={ServiceProviderAbout} />
        <Stack.Screen options={{headerShown:false}} name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}