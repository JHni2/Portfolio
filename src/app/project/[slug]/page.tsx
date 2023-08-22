import ProjectContent from '@/components/ProjectContent';
import { getAllProjects, getProjectData } from '@/service/projects';
import { Metadata } from 'next';

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

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const project = await getProjectData(slug);
  return {
    title: project?.title,
    description: project?.description,
  };
}

// 프로젝트 SSG로 동작하기
export async function generateStaticParams() {
  const posts = await getAllProjects();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
