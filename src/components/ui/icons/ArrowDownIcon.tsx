'use client';

import { handleScroll } from '@/app/util/scroll';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  size?: number;
};

export default function ArrowDownIcon({ size = 50 }: Props) {
  return (
    <Link aria-label="Arrow Down" href="#About" onClick={handleScroll}>
      <MdKeyboardArrowDown size={size} className="cursor-pointer" />
    </Link>
  );
}
