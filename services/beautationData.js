import { baseUrl } from "./supabase.js";
//Service Provider List based on The Location

//Service Providet Service List
const serviceProviderList=async (beautationid)=>{
    
 try{
    const response = await fetch(`${baseUrl}/api/userAuth/BeauticianService/${beautationid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
 console.error('Error Feting Beautaion in:', error);
 }
}
//Top beautationses
const beautaionReview=async (beautationid)=>{
    
 try{
    const response = await fetch(`${baseUrl}/api/userAuth/BeauticianReviews/${beautationid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
 console.error('Error Feting Beautaion in:', error);
 }
}
//Beautician About 
const beautaionAbout=async (beautationid)=>{
    
 try{
    const response = await fetch(`${baseUrl}/api/userAuth/BeauticianAbout/${beautationid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
 console.error('Error Feting Beautaion in:', error);
 }
}
export { beautaionReview,serviceProviderList,beautaionAbout};