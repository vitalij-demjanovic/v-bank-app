'use server';

import { cookies } from 'next/headers';

const token = cookies().get('token')?.value;

export async function getCards() {
  try {
    const response = await fetch(`${process.env.NEXT_BASE_URL}/user/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to update user data: ${response.statusText}`);
    }

    const cards = await response.json();
    return cards;
  } catch (error) {
    console.error('Error get user cards', error);
  }
}
