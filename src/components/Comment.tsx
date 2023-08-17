import CommentContent from './CommentContent';
import CommentInput from './CommentInput';

export default function CommentPage() {
  return (
    <section id="Comment" className="flex flex-col gap-6 my-4">
      <h2 className="text-3xl md:text-4xl font-bold my-4 text-center">Comment</h2>
      <CommentInput />
      <CommentContent />
    </section>
  );
}
