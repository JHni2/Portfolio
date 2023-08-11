import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  size?: number;
};

export default function ArrowDownIcon({ size = 50 }: Props) {
  return <MdKeyboardArrowDown size={size} className="cursor-pointer" />;
}
