import ProjectContent from '@/components/ProjectContent';
import { getProjectData } from '@/service/projects';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProjectData(slug);

  return (
    <article className="rounded-2xl bg-gray-100 shadow-lg m-4 ">
      <section className="flex justify-center shadow-md">
        <ProjectContent project={project} />
      </section>
    </article>
  );
}
