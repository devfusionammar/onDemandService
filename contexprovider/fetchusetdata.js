import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchUserData = async () => {
   
  try {

    const userDataJson = await AsyncStorage.getItem('userData');
    
    if (userDataJson) {
      const userData = JSON.parse(userDataJson);
      return userData;
    } else {
      console.log('User data not found in AsyncStorage');
      return null; 
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null; 
  }
};

export default fetchUserData;


