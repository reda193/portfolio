import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Naviagation/Navigation';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Job from './components/Job/Job';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Music from './components/Music/Music';
// App.jsx
function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Header />
        <div className="md:flex max-w-6xl mx-auto">
        <Navigation className="w-48" />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/job" element={<Job />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/music" element={<Music />} />
            </Routes>
          </main>

        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
