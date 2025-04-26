import { Text } from "rizzui";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
      ],
    },

    {
      title: "Developer",
      links: [
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/faraz-maqsood-8a153327b/",
          target: "_blank",
        },
        {
          name: "Github",
          href: "https://github.com/codewithfaraz",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 pt-12 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MarketGenius</h3>
            <Text className="text-gray-400 mb-4">
              Your all-in-one solution for competitive analysis and content
              optimization.
            </Text>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <Text className="text-gray-400 text-sm">
            © {year} MarketGenius. All rights reserved.
          </Text>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/faraz-maqsood-8a153327b/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/codewithfaraz"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
