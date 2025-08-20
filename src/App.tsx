import { Hero, AboutSection, Projects, ContactSection } from './components';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Hero />
      <AboutSection />
      <Projects />
      <ContactSection />
      <Footer />
      
    </div>
  );
}

export default App;
