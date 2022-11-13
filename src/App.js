import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ReferSection from "./components/ReferSection/ReferSection";
import WorkSection from "./components/WorkSection/WorkSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReferSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
