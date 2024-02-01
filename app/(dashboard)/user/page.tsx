import UserInfo from '@/app/components/User/UserInfo';
import { getUserData } from '@/lib/user/user';

export default async function Page() {
  const data = await getUserData();

  return (
    <div className='pl-16'>
      <h1 className='mb-8 text-3xl font-bold'>User</h1>
      <UserInfo
        firstName={data.firstName}
        lastName={data.lastName}
        email={data.email}
        address={data.address}
        role={data.role}
      />
    </div>
  );
}
