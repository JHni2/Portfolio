'use client';

import CommentForm, { commentProps } from './CommentForm';
import useSWR from 'swr';
import ArrowDownIcon from './ui/icons/ArrowDownIcon';

export default function CommentContent() {
  const { data: comments, isLoading } = useSWR('/api/comments');

  return (
    <section className="bg-grey dark:bg-navy rounded-3xl min-h-[400px] my-4 p-6 shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold opacity-60 mb-6">Comments</h2>
        <ArrowDownIcon size={30} />
      </div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col gap-4">
          {comments.map((comment: commentProps) => (
            <CommentForm key={comment.id} emoji={comment.emoji} content={comment.content} createdAt={comment.createdAt} />
          ))}
        </div>
      )}
    </section>
  );
}
