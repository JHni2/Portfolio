'use client';

import { handleScroll } from '@/app/util/scroll';
import { useScrollDirection } from '@/hooks/scroll';
import Link from 'next/link';

export default function Nav() {
  const categories = ['Home', 'About', 'Project', 'Contact', 'Comment'];
  const showNav = useScrollDirection();

  return (
    <>
      {showNav === 'up' && (
        <div className=" w-full sticky inset-0 my-0 mx-auto py-4 z-50 bg-white dark:bg-darkNavy">
          <ul className="text-center flex justify-evenly">
            {categories.map((cateogory) => (
              <li className="cursor-pointer text-lg font-semibold" key={cateogory}>
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
