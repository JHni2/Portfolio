import { parseDate } from '@/app/util/date';

export type commentProps = {
  emoji: string;
  content: string;
  createdAt: string;
  id?: string;
};

export default function CommentForm({ emoji, content, createdAt }: commentProps) {
  return (
    <section className="flex gap-6">
      <div className="flex justify-center items-center bg-white dark:bg-darkNavy rounded-full min-w-[60px] min-h-[60px] max-h-[60px] shadow-sm">
        <p className="text-xl md:text-2xl">{emoji}</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full px-5 py-2 bg-white dark:bg-darkNavy rounded-3xl text-base md:text-lg shadow-sm">
        <p>{content}</p>
        <p className="opacity-60 text-xs md:text-sm shrink-0">{parseDate(createdAt)}</p>
      </div>
    </section>
  );
}
