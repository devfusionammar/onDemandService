import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AddTrip from '../Screens/AddTrip';
import AddExpensesScreen from '../Screens/addExpensesScreen';
import Login from '../Screens/Auth/Login';
import BottomNavigation from './bottomNavigation';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
<<<<<<< HEAD
import PopularServiceProvider from '../Screens/popularServiceProvider/popularServiceProvider';
=======
import Signup from '../Screens/Auth/Signup';
import Profile from '../Screens/Profile';
<<<<<<< HEAD
import Changepass from '../Screens/Userinfo/Changepass';
import UProfile from '../Screens/Userinfo/UProfile';
=======
>>>>>>> origin/Team
>>>>>>> 32fd5b0c1acb19ef60df03d4d509a6135200e057
const Stack = createNativeStackNavigator();
export default function Appnavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login" screenOptions={{animationEnabled:true}}>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}  />
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}  />
        <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup}  />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}  />
        <Stack.Screen options={{headerShown:false}} name="AddTrip" component={AddTrip} />
        <Stack.Screen options={{headerShown:false}} name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen options={{headerShown:false}} name="AddExpensesScreen" component={AddExpensesScreen} />
        <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen} />
<<<<<<< HEAD
        <Stack.Screen options={{headerShown:false}} name="Changepass" component={Changepass} />
        <Stack.Screen options={{headerShown:false}} name="UProfile" component={UProfile} />
=======
        <Stack.Screen options={{headerShown:false}} name="PopularServiceProvider" component={PopularServiceProvider} />
>>>>>>> 32fd5b0c1acb19ef60df03d4d509a6135200e057
      </Stack.Navigator>
    </NavigationContainer>
  );
}