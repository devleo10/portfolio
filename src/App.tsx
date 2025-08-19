import { Hero, AboutSection, Projects, ContactSection } from './components';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <Projects />
      <ContactSection />
    </div>
  );
}

export default App;
