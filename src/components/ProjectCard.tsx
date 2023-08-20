'use client';
import { Project } from '@/service/projects';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = { post: Project };

export default function ProjectCard({ post: { title, description, date, path } }: Props) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/project/${path}`)} className="flex justify-around gap-3 p-10 shadow-lg rounded-3xl cursor-pointer dark:bg-navy">
      <div className="flex flex-col justify-evenly gap-4 md:gap-0 min-h-[200px]">
        <h3 className="text-lg md:text-2xl font-bold truncate w-full">{title}</h3>
        <p className="text-base md:text-lg font-semibold whitespace-pre-wrap">{description}</p>
        <time className="text-sm md:text-base">{date.toString()}</time>
      </div>
      <div className="relative w-[400px] h-[200px] overflow-hidden hidden md:block">
        <Image src={`/images/${path}.png`} alt={title} fill sizes="340px" className="rounded-3xl" />
      </div>
    </div>
  );
}
