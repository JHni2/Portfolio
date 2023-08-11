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
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} id="Home" className="h-screen flex items-center justify-center relative z-[1] bg-grey">
      <h3 className="text-4xl text-center font-bold leading-[3.5rem]">
        안녕하세요!
        <br />
        <span>프론트엔드 개발자</span>
        <em className="not-italic text-orange"> 김지현</em>
        <span>입니다.</span>
      </h3>
      <div className="animate-bounce absolute bottom-[100px] cursor-pointer">
        <ArrowDownIcon />
      </div>
    </div>
  );
}
