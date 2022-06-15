import './App.css';
import Navbar from '../Nav/Navbar';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';



function App() {
  return (
    <div className="App">
      {/* Nav Section */}
      <Navbar />
      {/* landing page */}
      <Landing />
      {/* Challenge section */}
      <ChallengeSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
