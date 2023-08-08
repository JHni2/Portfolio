import { getAllProjects } from '@/service/projects';
import MultiCarousel from './MultiCarousel';
import ProjectCard from './ProjectCard';

export default async function ProjectPage() {
  const projects = await getAllProjects();

  return (
    <section className="my-4">
      <h2 className="text-4xl font-bold my-4 text-center">Project</h2>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.title} post={project} />
        ))}
      </MultiCarousel>
    </section>
  );
}
