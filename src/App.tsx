import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import CareerList from "./components/CareerList";
import Footer from "./components/Footer";
import ResumeDownload from './components/ResumeDownload';
import BackgroundAnimation from "./components/BackgroundAnimation";
import EducationList from "./components/EducationList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 font-nunito overflow-x-hidden">
      <BackgroundAnimation />
      <Header />

      <div className="relative z-10 pt-20">
        <Hero />
        <AboutMe />
        <SkillsList />
        <ProjectsList />
        <CareerList />
        <EducationList />
        <Footer />
      </div>

      <ResumeDownload />
    </div>
  );
}
