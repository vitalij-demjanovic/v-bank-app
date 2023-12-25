import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import Switcher from '@/app/components/ui/Switcher';

export default function Home() {
  return (
    <div>
      <Button appearance={'primary'}>Transfer</Button>
      <Button appearance={'ghost'}>Transfer</Button>
      <Button appearance={'transparent'}>Transfer</Button>
      <Switcher />
    </div>
  );
}
