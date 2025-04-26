import { Title, Text, Badge } from "rizzui";

const steps = [
  {
    number: "01",
    title: "Enter Your Target Keyword",
    description:
      "Start by entering the keyword you want to analyze and rank for.",
    color: "blue",
  },
  {
    number: "02",
    title: "Analyze Top-Ranking Competitors",
    description:
      "We identify and scrape the top websites ranking for your keyword on Google.",
    color: "indigo",
  },
  {
    number: "03",
    title: "Review Detailed Insights",
    description:
      "Explore visual charts, content analysis, and strategic recommendations.",
    color: "purple",
  },
  {
    number: "04",
    title: "Generate Better Content",
    description:
      "Use our AI to create optimized content that outperforms competitors.",
    color: "violet",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title className="text-3xl md:text-4xl font-bold text-white mb-4">
            How MarketGenius Works
          </Title>
          <Text className="text-gray-300 text-lg max-w-3xl mx-auto">
            Get actionable insights in four simple steps and start outranking
            your competitors.
          </Text>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row mb-12 md:mb-16 relative ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div className="bg-gray-900 rounded-xl p-6 md:p-8 w-full max-w-lg">
                  <Badge
                    size="lg"
                    className={`bg-${step.color}-500/20 text-${step.color}-400 mb-4 px-3 py-1`}
                  >
                    STEP {step.number}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <Text className="text-gray-300">{step.description}</Text>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center items-center">
                <div
                  className={`hidden md:flex h-12 w-12 rounded-full bg-${step.color}-600 text-white font-bold items-center justify-center text-xl z-10`}
                >
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
