import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import HowItWorks from "./components/home/HowItWorks";
import Footer from "./components/Footer";
import CTASection from "./components/home/CTASection";
import FAQSection from "./components/home/FAQSection";
import Accounts from "./components/accounts";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <main className="flex-grow">
                    <HeroSection />
                    <FeaturesSection />
                    <HowItWorks />
                    <FAQSection />
                    <CTASection />
                  </main>
                </div>
              }
            />
            <Route path="/home" element={<Accounts />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  );
}

export default App;
