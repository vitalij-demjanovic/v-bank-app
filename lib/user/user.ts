'use server';

import { cookies } from 'next/headers';

const token = cookies().get('token')?.value;

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
export async function updateProfile(data: any) {
  try {
    const updateD = await fetch(`${process.env.NEXT_BASE_URL}/user/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!updateD.ok) {
      throw new Error(`Failed to update user data: ${updateD.statusText}`);
    }

    const message = await updateD.json();
    return message;
  } catch (error) {
    console.error('An error occurred while updating user data:', error);
  }
}
