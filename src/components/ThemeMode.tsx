'use client';

import DarkThemeIcon from './ui/icons/DarkThemeIcon';
import LightThemeIcon from './ui/icons/LightThemeIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))} className="flex text-xl cursor-pointer relative w-[20px] h-[20px] mr-4">
      {mounted && (
        <div>
          <div className={'absolute transition ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] duration-500 ' + (theme === 'light' ? 'opacity-100' : 'opacity-0')}>
            <LightThemeIcon />
          </div>
          <div className={'absolute transition ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] duration-500 text-white ' + (theme === 'dark' ? 'opacity-100' : 'opacity-0')}>
            <DarkThemeIcon />
          </div>
        </div>
      )}
    </div>
  );
}
