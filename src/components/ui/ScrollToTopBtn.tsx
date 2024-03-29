'use client';
import { throttle } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

interface ScrollToTopBtnPropsType {
  bottom?: string;
}

export default function ScrollToTopBtn({ bottom }: ScrollToTopBtnPropsType) {
  const [showBtn, setShowBtn] = useState(false);
  const beforeScrollY = useRef(0);

  const handleShowButton = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 700) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className={'fixed right-8 z-10 cursor-pointer rounded-full bg-white dark:bg-pointGreen p-2 text-pointGreen dark:text-white drop-shadow-md transition-all ' + (bottom ? bottom : 'bottom-[50px]')}
        >
          <BiArrowToTop size={28} />
        </div>
      )}
    </>
  );
}
