import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Project = {
  title: string;
  description: string;
  date: string;
  path: string;
};

export const getAllProjects = cache(() => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  return readFile(filePath, 'utf-8').then<Project[]>(JSON.parse);
});

export async function getPostData(fileName: string): Promise<Project & { content: string }> {
  const filePath = path.join(process.cwd(), 'data', 'projects', `${fileName}.md`);
  const projects = await getAllProjects();
  const project = projects.find((project) => project.path === fileName);

  if (!project) throw new Error(`${fileName}에 해당하는 프로젝트를 찾을 수 없습니다`);

  const content = await readFile(filePath, 'utf-8');
  return { ...project, content };
}
