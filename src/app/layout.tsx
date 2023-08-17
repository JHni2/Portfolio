import './globals.css';
import { Outfit } from 'next/font/google';
import SWRConfigContext from '@/context/SWRConfigContext';
import Recoil from '@/components/Recoil';
import Providers from '../components/Provider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: '김지현의 포트폴리오',
  description: 'NextJS를 사용한 포트폴리오입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <Recoil>
          <SWRConfigContext>
            <Providers>{children}</Providers>
          </SWRConfigContext>
        </Recoil>
      </body>
    </html>
  );
}
