import { Hero, AboutSection, WorkSection, ContactSection } from './components';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
