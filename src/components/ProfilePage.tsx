'use client';

import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.png';

type Props = { content: string };

export default function ProfilePage({ content }: Props) {
  return (
    <>
      {content === 'Contact' && (
        <h2 id="Contact" className="text-3xl md:text-4xl font-bold my-4 text-center">
          Contact
        </h2>
      )}
      <section id="About" className={`flex gap-10 items-center p-9 rounded-3xl flex-col md:flex-row ${content === 'About' ? 'bg-grey dark:bg-navy' : 'bg-pointYellow dark:bg-pointGreen'}`}>
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-orange shrink-0">
          <Image src={profileImage} alt="profileImage" priority />
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-bold text-xl md:text-2xl">김지현</p>
          <div className="flex flex-col font-bold text-base md:text-lg gap-2 md:gap-0">
            <p className="flex flex-col md:flex-row gap-0 md:gap-2">
              Email <span className="font-normal text-base md:text-lg">wlgus0260@naver.com</span>
            </p>
            {content === 'About' ? (
              <p className="flex flex-col md:flex-row gap-0 md:gap-2">
                Github
                <Link href="https://github.com/JHni2" target="_blank">
                  <span className="font-normal text-base md:text-lg hover:opacity-60">https://github.com/JHni2</span>
                </Link>
              </p>
            ) : (
              <p className="flex flex-col md:flex-row gap-0 md:gap-2">
                Kakao
                <Link href="https://open.kakao.com/o/skWBVJnf" target="_blank">
                  <span className="font-normal text-base md:text-lg hover:opacity-60">https://open.kakao.com/o/skWBVJnf</span>
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
