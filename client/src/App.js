import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Experience from './pages/Experience'; // yeni sayfa
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/About_Me';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
