import GradientBackdrop from './components/GradientBackdrop';
import Experience from './components/Experience';
import Header from './components/Header';
import Intro from './components/Intro';
import LatestProjects from './components/LatestProjects';

function App() {
  return (
    <main className="pb-8">
      <GradientBackdrop />
      <Header />
      <Intro />
      <Experience />
      <LatestProjects />
    </main>
  );
}

export default App;
