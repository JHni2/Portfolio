'use client';

import { Project } from '@/service/projects';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectModal from './ProjectModal';
import ModalPortal from './ui/ModalPortal';

type Props = { post: Project };

export default function ProjectCard({ post: { title, description, date, path } }: Props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex justify-around gap-3 p-10 shadow-lg rounded-3xl" onClick={() => setOpenModal(true)}>
        <div className="flex flex-col justify-evenly">
          <h3 className="text-2xl font-bold truncate w-full">{title}</h3>
          <p className="text-lg font-semibold whitespace-pre-wrap">{description}</p>
          <time>{date.toString()}</time>
        </div>
        <div className="relative w-[400px] h-[200px] overflow-hidden">
          <Image src={`/images/${path}.png`} alt={title} fill className="rounded-3xl" />
        </div>
      </div>
      {openModal && (
        <ModalPortal>
          <ProjectModal onClose={() => setOpenModal(false)}>
            <ProjectDetail path={path}></ProjectDetail>
          </ProjectModal>
        </ModalPortal>
      )}
    </>
  );
}
