import Image from 'next/image';
import Logo from 'public/images/logo.png';
import ThemeMode from './ThemeMode';

export default function Header() {
  return (
    <div className="fixed inset-0 h-[58px] z-10 transition-all ">
      <div className="flex px-9 py-[15px] max-w-[1218px] mx-auto my-0 justify-between items-center">
        <div className="flex gap-4 pl-4">
          <Image src={Logo} alt="logo" width={28} height={28} className="cursor-pointer" />
          <h1 className="text-xl font-bold cursor-pointer">즐겁게 작업하는 개발자</h1>
        </div>
        <ThemeMode />
      </div>
    </div>
  );
}
