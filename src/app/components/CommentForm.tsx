type Props = {
  emoji: string;
  content: string;
  createdAt: string;
};

export default function CommentForm({ emoji, content, createdAt }: Props) {
  return (
    <section className="flex gap-6">
      <div className="flex justify-center items-center bg-white rounded-full min-w-[60px] min-h-[60px] shadow-sm">
        <p className="text-2xl">{emoji}</p>
      </div>
      <div className="flex justify-between items-center w-full px-5 bg-white rounded-3xl text-lg shadow-sm">
        <p>{content}</p>
        <p className="opacity-60 text-base">{createdAt}</p>
      </div>
    </section>
  );
}
