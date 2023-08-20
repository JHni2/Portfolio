import { MdArrowForwardIos } from 'react-icons/md';

type Props = {
  size?: number;
  className?: string;
};

export default function ArrowForwardIcon({ size = 25, className = '' }: Props) {
  return <MdArrowForwardIos size={size} className={'cursor-pointer ' + className} />;
}
