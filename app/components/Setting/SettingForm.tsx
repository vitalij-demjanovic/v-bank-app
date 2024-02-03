'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/app/components/ui/Button';
import { updateProfile } from '@/lib/user/user';
import SuccessModal from '@/app/components/ui/SuccessModal';
import { useState } from 'react';

type FormSetting = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
};
export default function SettingForm() {
  const [isDone, setIsDone] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormSetting>();

  const onSubmit: SubmitHandler<FormSetting> = async (data: FormSetting) => {
    try {
      const { firstName, lastName, email, phoneNumber, address } = data;
      const requestData: Partial<FormSetting> = {};

      if (firstName.trim() !== '') requestData.firstName = firstName;
      if (lastName.trim() !== '') requestData.lastName = lastName;
      if (email.trim() !== '') requestData.email = email;
      if (phoneNumber.trim() !== '') requestData.phoneNumber = phoneNumber;
      if (address.trim() !== '') requestData.address = address;

      const update = await updateProfile(requestData);
      setIsDone(true);
      console.log(update);
      reset();
      return update;
    } catch (error) {
      console.error('An error occurred while saving data:', error);
    }
  };

  return (
    <div className='rounded-2xl bg-white p-10'>
      <h2 className='mb-10 text-2xl font-bold'>Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between'>
          <div className='mr-5 w-full'>
            <label className='mb-2 block text-primary-text'>First name:</label>
            <input
              {...register('firstName')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='text'
              placeholder='First name...'
            />
          </div>
          <div className='w-full'>
            <label className='mb-2 block text-primary-text'>Last name:</label>
            <input
              {...register('lastName')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='text'
              placeholder='Last name...'
            />
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <div className='mr-5 w-full'>
            <label className='mb-2 block text-primary-text'>Email:</label>
            <input
              {...register('email', { required: false })}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='email'
              placeholder='Email...'
            />
          </div>
          <div className='w-full'>
            <label className='mb-2 block text-primary-text'>Phone</label>
            <input
              {...register('phoneNumber')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='text'
              placeholder='Phone number...'
            />
          </div>
        </div>
        <div className='w-1/3'>
          <label className='mb-2 block text-primary-text'>Address</label>
          <textarea
            {...register('address')}
            className='mb-5 w-full resize-none rounded-3xl border border-primary p-3'
          ></textarea>
        </div>
        <div className='flex justify-end'>
          <Button
            type='submit'
            className=' w-full max-w-[350px] text-xl font-bold text-white'
            appearance={'primary'}
          >
            Save Setting
          </Button>
        </div>
      </form>
      <SuccessModal success={isDone} closeModal={() => setIsDone(false)} />
    </div>
  );
}
