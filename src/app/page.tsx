import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/Home';
import AboutPage from './components/About';

export default function Home() {
  return (
    <div className="min-w-[320px] min-h-full break-keep relative">
      <div className="flex flex-col gap-6 relative w-full max-w-[1290px] h-full my-0 mx-auto px-9 ">
        <Header />
        <HomePage />
        <Nav />
        <AboutPage />
      </div>
    </div>
  );
}
