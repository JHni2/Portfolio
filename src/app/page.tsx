import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/Home';
import EducationPage from './components/Education';
import SkillSetPage from './components/SkillSet';
import ProjectPage from './components/Project';
import ProfilePage from './components/ProfilePage';
import CommentPage from './components/Comment';

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
