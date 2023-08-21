'use client';

import { useEffect, useRef } from 'react';
import ArrowDownIcon from './ui/icons/ArrowDownIcon';
import { useSetRecoilState } from 'recoil';
import { showLogoState } from '@/store/showLogo';

export default function HomePage() {
  const componentRef = useRef(null);

  // Recoil
  const setShowLogo = useSetRecoilState<boolean>(showLogoState);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setShowLogo(false);
          } else {
            setShowLogo(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(componentRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={componentRef} id="Home" className="relative h-[calc(100vh-63px)] flex items-center justify-center pb-6 z-[1] bg-gradient-to-b from-grey to-white dark:from-navy dark:to-darkNavy">
      <strong className="text-3xl md:text-4xl text-center font-bold leading-[3rem] md:leading-[3.5rem]">
        안녕하세요!
        <br />
        <span>프론트엔드 개발자</span>
        <em className="not-italic text-orange"> 김지현</em>
        <span>입니다.</span>
      </strong>
      <div className="animate-bounce absolute bottom-[100px] cursor-pointer">
        <ArrowDownIcon />
      </div>
    </div>
  );
}
