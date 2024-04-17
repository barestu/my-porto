import GradientBackdrop from './components/GradientBackdrop';
import Header from './components/Header';
import Intro from './components/Intro';
import LatestProjects from './components/LatestProjects';

function App() {
  return (
    <main className="space-y-8">
      <GradientBackdrop />
      <Header />
      <Intro />
      <LatestProjects />
    </main>
  );
}

export default App;
