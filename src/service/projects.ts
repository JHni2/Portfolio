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
