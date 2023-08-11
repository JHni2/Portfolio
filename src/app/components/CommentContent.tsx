import CommentForm from './CommentForm';
import ArrowDown from './ui/icons/ArrowDownIcon';

export default function CommentContent() {
  return (
    <section className="bg-grey rounded-3xl min-h-[400px] my-4 p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold opacity-60">Comments</h2>
        <ArrowDown />
      </div>
      <CommentForm emoji="😎" content={'멋있다!'} createdAt={'2023.06.02 11:46 PM'} />
    </section>
  );
}
