import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/Home';
import AboutPage from './components/About';
import EducationPage from './components/Education';
import SkillSetPage from './components/SkillSet';
import ProjectPage from './components/Project';

export default function Home() {
  return (
    <div className="min-w-[320px] min-h-full break-keep relative">
      <div className="flex flex-col gap-4 relative w-full max-w-[1290px] h-full my-0 mx-auto px-9 ">
        <Header />
        <HomePage />
        <Nav />
        <AboutPage />
        <SkillSetPage />
        <EducationPage />
        {/* @ts-expect-error Async Server Component */}
        <ProjectPage />
      </div>
    </div>
  );
}
