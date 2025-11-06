import { Hero, AboutSection, Projects, ContactSection } from './components';
import Footer from './components/Footer';

function App() {
  console.log('App component rendering...');
  
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
