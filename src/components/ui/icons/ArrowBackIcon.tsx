'use client';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';

type Props = {
  size?: number;
};

export default function ArrowDownIcon({ size = 25 }: Props) {
  const router = useRouter();

  return <MdArrowBackIosNew onClick={() => router.back()} size={size} className="cursor-pointer opacity-30" />;
}
