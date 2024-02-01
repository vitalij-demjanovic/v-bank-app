import { cookies } from 'next/headers';

export default function getToken() {
  const token = cookies().get('token');
  if (token) {
    return token.value;
  }
}
