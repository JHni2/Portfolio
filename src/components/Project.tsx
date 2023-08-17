import { getAllProjects } from '@/service/projects';
import MultiCarousel from './MultiCarousel';
import ProjectCard from './ProjectCard';

export default async function ProjectPage() {
  const projects = await getAllProjects();

  return (
    <section id="Project" className="relative my-4 z-0">
      <h2 className="text-3xl md:text-4xl font-bold my-4 text-center">Project</h2>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.title} post={project} />
        ))}
      </MultiCarousel>
    </section>
  );
}
