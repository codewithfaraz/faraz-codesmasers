import { Button, Input } from "rizzui";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Outrank Your Competition?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
          Join thousands of marketers who are using MarketGenius to gain a
          competitive edge. Start your free trial today – no credit card
          required.
        </p>

        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-blue-100"
          />
          <Button className="bg-white text-blue-700 hover:bg-blue-50 transition-colors">
            Get Started Free
          </Button>
        </div>

        <p className="text-blue-100 text-sm mt-4">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
