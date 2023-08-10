import { Project } from '@/service/projects';
import MarkdownViewer from './MarkdownViewer';

type ProjectData = Project & { content: string };

export default function ProjectContent({ project }: { project: ProjectData }) {
  const { title, description, date, content } = project;

  return (
    <section className="flex flex-col items-center p-4 gap-2">
      <div className="flex items-center self-end text-sky-600">
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-base font-bold items-center opacity-50">{description}</p>
      <div className="w-44 border-2 border-sky-600 my-7 opacity-30"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
