import axios from 'axios';
import getToken from '@/lib/auth/getToken';

export const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdGFsaWpkZW1qYW5vdmljQHRlc3QuY29tIiwiaWF0IjoxNzA2ODI4MzYzfQ.eIS__VxaweXz6Z9GF2lAGTa4duH3m4szssJN_Hdjtp8'
  }
});
