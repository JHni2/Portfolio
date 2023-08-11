'use client';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkDown
      className="prose lg:prose-xl max-w-[720px]"
      remarkPlugins={[remarkGfm]}
      components={{
        img: (image, index) => <Image priority={index === 0} className="w-full object-cover " src={image.src || ''} alt={image.alt || ''} width={500} height={350} />,
      }}
    >
      {content}
    </ReactMarkDown>
  );
}
