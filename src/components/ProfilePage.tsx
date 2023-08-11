import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.png';

type Props = { content: string };

export default function ProfilePage({ content }: Props) {
  return (
    <>
      {content === 'Contact' && <h2 className="text-4xl font-bold my-4 text-center">Contact</h2>}
      <section className={`flex gap-10 items-center p-9 rounded-3xl ${content === 'About' ? 'bg-grey' : 'bg-[#FAF8C8]'}`}>
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-orange">
          <Image src={profileImage} alt="profileImage" priority />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl">김지현</p>
          <div className="font-bold text-lg">
            <p className="flex gap-2">
              Email <span className="font-normal text-lg">wlgus0260@naver.com</span>
            </p>
            {content === 'About' ? (
              <p className="flex gap-2">
                Github
                <Link href="https://github.com/JHni2" target="_blank">
                  <span className="font-normal text-lg hover:opacity-60">https://github.com/JHni2</span>
                </Link>
              </p>
            ) : (
              <p className="flex gap-2">
                Kakao
                <Link href="https://open.kakao.com/o/skWBVJnf" target="_blank">
                  <span className="font-normal text-lg hover:opacity-60">https://open.kakao.com/o/skWBVJnf</span>
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
