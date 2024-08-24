import Footer from './components/Footer';
import GradientBackdrop from './components/GradientBackdrop';
import Header from './components/Header';
import Intro from './components/Intro';
import LatestProjects from './components/LatestProjects';

function App() {
  return (
    <main className="relative gap-6 overflow-x-hidden min-h-screen flex flex-col">
      <div className="flex-1">
        <Header />
        <Intro />
        <LatestProjects />
      </div>
      <Footer />

      <GradientBackdrop />
    </main>
  );
}

export default App;
