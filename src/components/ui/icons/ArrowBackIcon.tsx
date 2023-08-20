'use client';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';

type Props = {
  size?: number;
  className?: string;
  goBack?: boolean;
};

export default function ArrowBackIcon({ size = 25, className = '', goBack = false }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (goBack) {
      router.back();
    }
  };

  return <MdArrowBackIosNew onClick={handleClick} size={size} className={'cursor-pointer opacity-30 ' + className} />;
}
