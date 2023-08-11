import EducationPage from '@/components/Education';
import Header from '@/components/Header';
import HomePage from '@/components/Home';
import Nav from '@/components/Nav';
import ProfilePage from '@/components/ProfilePage';
import ProjectPage from '@/components/Project';
import SkillSetPage from '@/components/SkillSet';
import CommentPage from '../components/Comment';

export default function Home() {
  return (
    <div className="min-w-[320px] min-h-full break-keep relative">
      <div className="flex flex-col gap-4 relative w-full max-w-[1290px] h-full my-0 mx-auto px-9 ">
        <Header />
        <HomePage />
        <Nav />
        <ProfilePage content="About" />
        <SkillSetPage />
        <EducationPage />
        {/* @ts-expect-error Async Server Component */}
        <ProjectPage />
        <ProfilePage content="Contact" />
        <CommentPage />
      </div>
    </div>
  );
}
