import { useState, useEffect } from "react";
import { Button, ActionIcon, Drawer } from "rizzui";
import { Menu, X } from "lucide-react";
import { useClerk, UserButton } from "@clerk/clerk-react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];
  const { openSignIn, openSignUp, isSignedIn } = useClerk();

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div
        className={`
        transition-all duration-300 ease-in-out
        max-w-6xl mx-auto rounded-full 
        backdrop-blur-md bg-gray-900/80
        ${scrolled ? "shadow-lg shadow-blue-900/20" : ""}
        border border-gray-800/50
      `}
      >
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                MarketGenius
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {isSignedIn ? (
              ""
            ) : (
              <div className="bg-gray-800/50 rounded-full px-1 py-1 flex">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-gray-700/50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </nav>

          {/* Action buttons */}
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className="flex items-center space-x-3">
              <Button
                onClick={openSignIn}
                variant="outline"
                className="hidden md:flex border-blue-400/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-colors text-sm h-9 px-4"
              >
                Log In
              </Button>
              <Button
                onClick={openSignUp}
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all text-sm h-9 px-4 shadow-md shadow-blue-900/20"
              >
                Get Started
              </Button>

              {/* Mobile menu button */}
              <ActionIcon
                variant="text"
                className="md:hidden text-white hover:bg-gray-800/70 rounded-full"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={22} />
              </ActionIcon>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <Drawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        placement="right"
        size="sm"
        overlayClassName="bg-opacity-60 bg-gray-900 backdrop-blur-sm"
        containerClassName="!bg-gray-900/95 backdrop-blur-md !w-full max-w-xs !p-0 z-[9999]"
      >
        <div className="flex flex-col h-full bg-transparent text-white p-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              MarketGenius
            </div>
            <ActionIcon
              variant="text"
              className="text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={22} />
            </ActionIcon>
          </div>
          <div className="mt-10 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg px-4 py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-gray-800/50">
            <Button
              variant="outline"
              className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-colors mb-3"
            >
              Log In
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all shadow-md shadow-blue-900/20">
              Get Started
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
