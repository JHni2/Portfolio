import { Project } from '@/service/projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Project };

export default function ProjectCard({ post: { title, description, date, path } }: Props) {
  return (
    <Link href={`/project/${path}`}>
      <div className="flex justify-around gap-3 p-10 shadow-lg rounded-3xl cursor-pointer">
        <div className="flex flex-col justify-evenly">
          <h3 className="text-2xl font-bold truncate w-full">{title}</h3>
          <p className="text-lg font-semibold whitespace-pre-wrap">{description}</p>
          <time>{date.toString()}</time>
        </div>
        <div className="relative w-[400px] h-[200px] overflow-hidden">
          <Image src={`/images/${path}.png`} alt={title} fill className="rounded-3xl" />
        </div>
      </div>
    </Link>
  );
}
