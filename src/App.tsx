import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import AboutMe from "./components/about/AboutMe";
import SkillsList from "./components/skills/SkillsList";
import ProjectsList from "./components/projects/ProjectsList";
import CareerList from "./components/career/CareerList";
import Footer from "./components/layout/Footer";
import ResumeDownload from './components/resume/ResumeDownload';
import BackgroundAnimation from "./components/layout/BackgroundAnimation";
import EducationList from "./components/education/EducationList";

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
