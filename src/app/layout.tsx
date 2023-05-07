import './global.css';

import { Navbar } from '@/components/layout/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarLinks = [
    { text: 'Login with Spotify', href: '/login' },
  ];

  return (
    <html lang="en">
      <body
        className={`bg-zinc-900 text-white max-w-7xl mx-auto px-8 ${roboto.className}`}
      >
        <Navbar links={navbarLinks} />
        {children}
      </body>
    </html>
  );
}
