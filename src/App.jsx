import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './styles/animations.css';
import CursorGlow from './components/common/CursorGlow';
import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Certifications from './components/certifications/Certifications';
import Activities from './components/activities/Activities';
import Education from './components/education/Education';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import ProjectDetail from './components/projects/ProjectDetail';

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Activities />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="app-layout">
      <CursorGlow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
