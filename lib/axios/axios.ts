import axios from 'axios';
import { cookies } from 'next/headers';

const token = cookies().get('token')?.value;

export const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer ' + token
  }
});
