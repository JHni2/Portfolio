'use client';

import { showLogoState } from '@/store/showLogo';
import Image from 'next/image';
import Logo from 'public/images/logo.png';
import ThemeMode from './ThemeMode';
import { useRecoilValue } from 'recoil';

export default function Header() {
  const showLogo = useRecoilValue(showLogoState);

  return (
    <>
      {showLogo && (
        <div className="absolute inset-0 h-[58px] z-50">
          <div className="fixed max-w-[1280px] flex inset-0 h-[58px] mx-9 lg:mx-auto justify-between items-center backdrop-blur bg-white/30 dark:bg-darkNavy/10">
            <div className="flex gap-4 pl-4 items-center">
              <Image src={Logo} alt="logo" width={28} height={28} className="w-[auto]" />
              <h1 className="text-lg md:text-xl font-bold">즐겁게 작업하는 개발자</h1>
            </div>
            <ThemeMode />
          </div>
        </div>
      )}
    </>
  );
}
