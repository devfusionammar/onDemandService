import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AddTrip from '../Screens/AddTrip';
import AddExpensesScreen from '../Screens/addExpensesScreen';
import Login from '../Screens/login';
import BottomNavigation from './bottomNavigation';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import PopularServiceProvider from '../Screens/popularServiceProvider/popularServiceProvider';
const Stack = createNativeStackNavigator();
export default function Appnavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="BottomNavigation" screenOptions={{animationEnabled:true}}>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}  />
        <Stack.Screen options={{headerShown:false}} name="AddTrip" component={AddTrip} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen options={{headerShown:false}} name="AddExpensesScreen" component={AddExpensesScreen} />
        <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{headerShown:false}} name="PopularServiceProvider" component={PopularServiceProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}