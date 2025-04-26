import { Title, Text } from "rizzui";
import { Search, BarChart2, FileText, Target } from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-blue-500" />,
    title: "Competitor Analysis",
    description:
      "Analyze top-ranking websites for any keyword to uncover their strategies and tactics.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
    title: "Data Visualization",
    description:
      "View comprehensive charts and analytics to understand market trends and opportunities.",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    title: "Content Generation",
    description:
      "Generate high-quality, SEO-optimized content based on successful competitor strategies.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Strategic Insights",
    description:
      "Get actionable recommendations to improve your website and outrank competitors.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features to Supercharge Your Market Analysis
          </Title>
          <Text className="text-gray-300 text-lg max-w-3xl mx-auto">
            MarketGenius combines advanced analytics with AI-powered content
            generation to give you a competitive edge in your market.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors p-6"
            >
              <div className="bg-gray-700/50 rounded-lg p-3 inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <Text className="text-gray-300">{feature.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
