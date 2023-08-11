'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

type Form = {
  emoji: string;
  content: string;
};

const DEFAULT_DATA = {
  emoji: '',
  content: '',
};

export default function CommentInput() {
  const [emoji, setEmoji] = useState<string>('😊');
  const [comment, setComment] = useState<Form>(DEFAULT_DATA);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [hasmounted, sethasmounted] = useState(false);

  useEffect(() => {
    sethasmounted(true);
  }, []);

  if (!hasmounted) {
    return null;
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComment((prev) => ({ ...prev, content: value }));
  };

  const onEmojiClick = (e: string) => {
    setEmoji(e);
    setOpenModal(false);
  };

  return (
    <section className="flex gap-4 max-h-[64px]">
      <div className="relative flex justify-center items-center bg-grey rounded-full h-[60px] min-w-[60px] max-w-[60px] shadow-md">
        <p className="absolute text-2xl cursor-pointer" onClick={() => setOpenModal(!openModal)}>
          {emoji}
        </p>
        {openModal && (
          <div className="relative w-full top-[17rem] z-10">
            <EmojiPicker skinTonesDisabled={true} lazyLoadEmojis onEmojiClick={(e) => onEmojiClick(e.emoji)} />
          </div>
        )}
      </div>
      <div className="flex justify-between gap-6 bg-grey rounded-3xl shadow-md w-full">
        <input className="w-full ml-5 bg-transparent outline-none" type="text" id="comment" name="comment" placeholder="댓글을 입력해주세요." value={comment.content} required onChange={onChange} />
        <div className="flex items-center justify-center my-3 mr-4 px-4 bg-pointGrey/40 text-white rounded-3xl font-semibold">입력</div>
      </div>
    </section>
  );
}
