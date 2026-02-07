import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Timeline } from './components/sections/Timeline';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { CyberCursor } from './components/ui/CyberCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';

function App() {
  return (
    <Layout>
      <CyberCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
