import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from "./supabase.js"

export async function getUser() {
  console.log("Loading")
  try {

    const token = await AsyncStorage.getItem('AuthToken');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }
 
   
    const response = await fetch(`${baseUrl}/api/userAuth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${token}`, 
      },
    });

   
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    // Parse the response JSON
    const data = await response.json();

    // console.log("This is api call Data",data);
    return data;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching user data:', error);
    throw error;
  }
}
