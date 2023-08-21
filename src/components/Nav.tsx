'use client';

import { handleScroll } from '@/app/util/scroll';
import { useScrollDirection } from '@/hooks/scroll';
import { showLogoState } from '@/store/showLogo';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export default function Nav() {
  const categories = ['Home', 'About', 'Project', 'Contact', 'Comment'];
  const scrollDirection = useScrollDirection();
  const defaultNav = useRecoilValue(showLogoState);
  const showNav = defaultNav === true || scrollDirection === 'up';

  return (
    <>
      {showNav && (
        <div className=" w-full sticky inset-0 my-0 mx-auto py-4 z-50 backdrop-blur bg-white/30 dark:bg-darkNavy/80">
          <ul className="text-center flex justify-evenly">
            {categories.map((cateogory) => (
              <li className="cursor-pointer text-sm md:text-lg font-semibold" key={cateogory}>
                <Link href={`#${cateogory}`} onClick={handleScroll}>
                  {cateogory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
