'use server';

import { cookies } from 'next/headers';

export const login = async (data: any) => {
  return fetch(`http://localhost:8000/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      cookies().set({
        name: 'token',
        value: data.access_token
      });
      return data;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const deleteToken = async () => {
  cookies().delete('token');
};
