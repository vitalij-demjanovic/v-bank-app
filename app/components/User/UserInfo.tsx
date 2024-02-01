import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import Link from 'next/link';

interface UserInfoProps {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  role: string;
}

export default async function UserInfo({
  email,
  address,
  role,
  lastName,
  firstName
}: UserInfoProps) {
  return (
    <div className='rounded-2xl bg-white p-10'>
      <div className='mb-10 flex items-center'>
        <div className='h-[145px] w-[145px] rounded-full bg-light-grey'></div>
        <div className='ml-5'>
          <span className='mr-1 font-bold'>{firstName}</span>
          <span className='font-bold'>{lastName}</span>
          <p className='mb-3 text-sm font-light text-primary-text'>
            {role} at <span className='font-bold text-primary'>V</span>Bank
          </p>
          <Button appearance={'ghost'} className='w-[185px]'>
            <Link href={'/setting'}>Edit profile</Link>
          </Button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-start'>
          <Image
            src={'img/address.svg'}
            alt={'address'}
            width={50}
            height={50}
          />
          <div className='ml-3'>
            <span className='block text-sm font-light text-primary-text'>
              Address
            </span>
            <p className='max-w-[210px] font-semibold'>{address}</p>
          </div>
        </div>
        <div className='flex items-start'>
          <Image src={'img/email.svg'} alt={'address'} width={50} height={50} />
          <div className='ml-3'>
            <span className='block text-sm font-light text-primary-text'>
              Email
            </span>
            <a
              href='mailto:admin@mail.com'
              title='email'
              className='font-semibold'
            >
              {email}
            </a>
          </div>
        </div>
        <div className='flex items-start'>
          <Image src={'img/Phone.svg'} alt={'address'} width={50} height={50} />
          <div className='ml-3'>
            <span className='block text-sm font-light text-primary-text'>
              Phone
            </span>
            <a href='tel:+123456789' title='phone' className='font-semibold'>
              +12 345 6789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
