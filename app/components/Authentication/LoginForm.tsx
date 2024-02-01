'use client';
import Button from '@/app/components/ui/Button';
import Logo from '@/app/components/ui/Logo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '@/lib/auth/auth';
import { useRouter } from 'next/navigation';

type FormFields = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async data => {
    const token = await login(data);
    if (token) {
      router.push('/home');
    }
  };

  return (
    <div className='w-[450px] max-w-[450px] rounded-3xl bg-light-grey px-16 py-10'>
      <div className='flex justify-center'>
        <Logo />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex flex-col'>
        <label>Your email</label>
        <input
          {...register('email', {
            required: true
          })}
          className='mb-5 rounded-3xl p-3'
          type='text'
          placeholder='Email'
        />
        <label>Your password</label>
        <input
          {...register('password', {
            required: true
          })}
          className='mb-10 rounded-3xl p-3'
          type='password'
          placeholder='password'
        />
        <Button
          type='submit'
          className='text-xl font-bold text-white'
          appearance={'primary'}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
