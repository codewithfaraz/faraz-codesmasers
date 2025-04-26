import { Button, Text } from "rizzui";
import { ArrowRight } from "lucide-react";
import HeroImage from "./hero-image.png";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const HeroSection = () => {
  // Fallback SVG placeholder
  const { openSignUp, isSignedIn } = useClerk();
  const navigate = useNavigate();
  if (isSignedIn) {
    navigate("/home");
  }
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Analyze Competitors &
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {" "}
                Outrank Them
              </span>
            </h1>
            <Text className="text-gray-300 text-lg md:text-xl mb-8">
              MarketGenius helps you analyze competitor websites, uncover their
              strategies, and generate content that ranks better. Enter a
              keyword, get insights, and dominate your market.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={openSignUp}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-200 hover:border-white hover:text-white transition-colors"
              >
                See How It Works
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-gray-800 rounded-lg shadow-xl p-2">
                {/* Fixed container with aspect ratio and object-fit properties */}
                <div className="relative rounded-md w-full h-64 md:h-80 bg-gray-800 overflow-hidden">
                  <img
                    src={HeroImage}
                    alt="MarketGenius Dashboard"
                    className="rounded-md w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
