import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import HowItWorks from "./components/home/HowItWorks";
import Footer from "./components/Footer";
import CTASection from "./components/home/CTASection";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
