import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.png';

export default function AboutPage() {
  return (
    <section className="flex gap-10 items-center bg-grey p-9 rounded-3xl">
      <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-orange">
        <Image src={profileImage} alt="profileImage" priority />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl">김지현</p>
        <div className="font-bold text-lg">
          <p className="flex gap-2">
            Email <span className="font-normal text-lg">wlgus0260@naver.com</span>
          </p>
          <p className="flex gap-2">
            Github{' '}
            <Link href="https://github.com/JHni2" target="_blank">
              <span className="font-normal text-lg hover:opacity-60">https://github.com/JHni2</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
