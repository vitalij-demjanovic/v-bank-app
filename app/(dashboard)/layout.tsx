import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/layout/Header';
import SideBar from '@/app/components/layout/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to V-Bank',
  description: 'Bank App'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex  bg-light-grey'>
          <SideBar />
          <main className='w-full'>
            <Header />
            <div className='container'>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
