'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      )}
    </>
  );
}
