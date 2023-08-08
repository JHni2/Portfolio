import ArrowDown from '../components/ui/icons/ArrowDownIcon';

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center relative z-[1] bg-grey">
      <h3 className="text-4xl text-center font-bold leading-[3.5rem]">
        안녕하세요!
        <br />
        <span>프론트엔드 개발자</span>
        <em className="not-italic text-orange"> 김지현</em>
        <span>입니다.</span>
      </h3>
      <div className="animate-bounce absolute bottom-[30px] cursor-pointer">
        <ArrowDown />
      </div>
    </div>
  );
}
