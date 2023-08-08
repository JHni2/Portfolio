'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import DarkThemeIcon from './ui/icons/DarkThemeIcon';
import LightThemeIcon from './ui/icons/LightThemeIcon';

export default function ThemeMode() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    if (localStorage.getItem('darkTheme') === 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return darkTheme !== undefined ? (
    <div onClick={() => setDarkTheme(!darkTheme)} className="flex text-xl cursor-pointer relative w-[20px] h-[20px] mr-4">
      <div className={'absolute transition ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] duration-500 ' + (!darkTheme ? 'opacity-100' : 'opacity-0')}>
        <LightThemeIcon />
      </div>
      <div className={'absolute transition ease-[cubic-bezier(0.18, 0.89, 0.32, 1.28)] duration-500 ' + (darkTheme ? 'opacity-100' : 'opacity-0')}>
        <DarkThemeIcon />
      </div>
    </div>
  ) : (
    <></>
  );
}
