import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AddTrip from '../Screens/AddTrip';
import AddExpensesScreen from '../Screens/addExpensesScreen';
import Login from '../Screens/Auth/Login';
import BottomNavigation from './bottomNavigation';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';

import PopularServiceProvider from '../Screens/popularServiceProvider/popularServiceProvider';
import Signup from '../Screens/Auth/Signup';
import Profile from '../Screens/Profile';

import CurrentLocation from '../Screens/Map/CurrentLocation';
import Location from '../Screens/Location';
import RecptPending from '../Screens/Receipt/ReceiptPending';
import Changepass from '../Screens/Userinfo/Changepass';
import UProfile from '../Screens/Userinfo/UProfile';
import RecptComplete from '../Screens/Receipt/ReceiptComplete';



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

      </Stack.Navigator>
    </NavigationContainer>
  );
}