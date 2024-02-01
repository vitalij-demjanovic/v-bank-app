'use client';
import LoginForm from '@/app/components/Authentication/LoginForm';
import { getCookies } from 'cookies-next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const cookies = getCookies();
  const router = useRouter();

  useEffect(() => {
    if (cookies.token) {
      router.push('/home');
    }
  }, [cookies]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
