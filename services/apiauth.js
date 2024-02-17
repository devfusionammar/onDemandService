import { baseUrl } from "./supabase.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function createUser({ FirstName,LastName, Email, Username, PhoneNO, Password }) {
    console.log("createUser function called");
    try {
        console.log(baseUrl);
        console.log(FirstName,LastName, Email, Username, PhoneNO, Password);
        const response = await fetch(`${baseUrl}/api/userAuth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FirstName: FirstName,
                LastName: LastName,
                Email: Email,
                Username: Username,
                PhoneNo: PhoneNO,
                Password: Password,
            }),
        });

        if (!response.ok) {
            console.log(response);
            const errorData = await response.json();
            if (response.status === 404 && errorData.error === "This Email or username already exist") {
                console.error("User already exists");
                throw new Error("User already exists"); // Throw custom error for client-side handling
            } else {
                throw new Error('Failed to create user');
            }
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error creating user:', error);
        console.log(error);
        throw error;
    }
}


export async function LoginUser({ UserName, Password }) {
  console.log("Login function called");
  try {
    const response = await fetch(`${baseUrl}/api/userAuth/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserName: UserName,
        Password: Password,
      }),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();


    await AsyncStorage.setItem('AuthToken', data.AuthToken);
    
console.log(data.AuthToken)
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}
  ///Forget password Secrtion
  export async function forgetPassword({ OTPReq, NewPassword }) {
    console.log("+++++++++++++++++",OTPReq,NewPassword)
    const authToken = await AsyncStorage.getItem('AuthToken');
    
    try {
      const response = await fetch(`${baseUrl}/api/userAuth/forgetPassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': `${authToken}`
        },
        body: JSON.stringify({
          OTPReq: OTPReq,
          NewPassword: NewPassword,
        }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
  
      const data = await response.json();
      console.log(data)       
  console.log(data.AuthToken)
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }