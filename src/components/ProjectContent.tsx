import { Project } from '@/service/projects';
import MarkdownViewer from './MarkdownViewer';
import ArrowBackIcon from './ui/icons/ArrowBackIcon';
import ScrollToTopBtn from './ui/ScrollToTopBtn';

type ProjectData = Project & { content: string };

export default function ProjectContent({ project }: { project: ProjectData }) {
  const { title, description, date, content } = project;

  return (
    <section className="flex flex-col items-center p-4 gap-2">
      <div className="flex items-center self-end">
        <p className="text-xs md:text-base font-semibold ml-2">{date.toString()}</p>
      </div>
      <div className="flex items-center sticky top-0 bg-white dark:bg-darkNavy w-full py-4 z-50 text-center">
        <ArrowBackIcon goBack={true} />
        <h1 className="grow text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
      <p className="text-base font-bold items-center text-center opacity-50 whitespace-break-spaces">{description}</p>
      <div className="w-44 border-2 border-sky-600 my-7 opacity-30"></div>
      <MarkdownViewer content={content} />
      <ScrollToTopBtn />
    </section>
  );
}
