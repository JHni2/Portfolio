'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import useSWR from 'swr';
import { MoonLoader } from 'react-spinners';
import { useTheme } from 'next-themes';

type Form = {
  emoji: string;
  content: string;
};

const DEFAULT_DATA = {
  emoji: '😊',
  content: '',
};

export default function CommentInput() {
  const [comment, setComment] = useState<Form>(DEFAULT_DATA);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [hasmounted, sethasmounted] = useState(false);
  const disabled = comment.content === '';
  const { theme } = useTheme();

  const { mutate } = useSWR('/api/comments');

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
    setComment((prev) => ({ ...prev, emoji: e }));
    setOpenModal(false);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickButton();
    }
  };

  const onClickButton = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('emoji', comment.emoji);
    formData.append('content', comment.content);

    fetch('/api/comments', { method: 'POST', body: formData })
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
      })
      .catch((err) => setError(err.toString()))
      .finally(() => {
        setComment(DEFAULT_DATA);
        mutate();
        setLoading(false);
      });
  };

  return (
    <section className="flex gap-4 max-h-[64px]">
      <div className="relative flex justify-center items-center bg-grey dark:bg-navy rounded-full h-[60px] min-w-[60px] max-w-[60px] shadow-md">
        <p className="absolute text-2xl cursor-pointer" onClick={() => setOpenModal(!openModal)}>
          {comment.emoji}
        </p>
        {openModal && (
          <div className="relative w-full top-[17rem] z-10">
            <EmojiPicker theme={theme === 'light' ? Theme.LIGHT : Theme.DARK} skinTonesDisabled={true} lazyLoadEmojis onEmojiClick={(e) => onEmojiClick(e.emoji)} />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-6 pr-6 bg-grey dark:bg-navy rounded-3xl shadow-md w-full">
        <input onKeyPress={(e) => onKeyPress(e)} disabled={loading} className="w-full ml-5 !bg-transparent outline-none truncate" type="text" id="comment" name="comment" placeholder="댓글을 입력해주세요." value={comment.content} required onChange={onChange} />
        {loading ? (
          <MoonLoader size={30} speedMultiplier={0.5} />
        ) : (
          <button disabled={disabled} onClick={() => onClickButton()} className={'flex items-center justify-center px-4 py-2 bg-pointGrey/40 text-white rounded-3xl font-semibold ' + (disabled ? '' : 'cursor-pointer')}>
            입력
          </button>
        )}
      </div>
    </section>
  );
}
