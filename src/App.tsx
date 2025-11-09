import Footer from './components/Footer';
import GradientBackdrop from './components/GradientBackdrop';
import Experience from './components/Experience';
import Header from './components/Header';
import Intro from './components/Intro';
import LatestProjects from './components/LatestProjects';
import GoogleTagManager from './components/GoogleTagManager';

function App() {
  return (
    <>
      <GoogleTagManager />

      <main className="pt-8">
        <GradientBackdrop />

        <Header />
        <Intro />
        <Experience />
        <LatestProjects />
        <Footer />
      </main>
    </>
  );
}

export default App;
