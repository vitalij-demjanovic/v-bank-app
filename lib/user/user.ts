import { instance } from '@/lib/axios/axios';

export const getUserData = async () => {
  try {
    const response = await instance.get('/auth/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
