import type { Metadata } from 'next';

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
      <body>
        <main className='flex h-screen w-full items-center justify-center bg-primary'>
          {children}
        </main>
      </body>
    </html>
  );
}
