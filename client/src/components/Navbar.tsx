import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation } from "wouter"; 
import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation(); // <--- ACEASTA LINIE lipsea

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", to: "home", type: "scroll" },
    { name: "ABOUT", to: "about", type: "scroll" },
    { name: "EXPERIENCE", to: "experience", type: "scroll" },
    { name: "PROJECTS", to: "projects", type: "scroll" },
    { name: "BLOG", to: "/blog", type: "route" }, 
    { name: "CONTACT", to: "contact", type: "scroll" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-b border-primary/20 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - click to go home */}
          <RouterLink href="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <Terminal className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold tracking-widest text-primary">
              ./SERAFIM_LUPAN
            </span>
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                link.type === "scroll" && location === "/" ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    [{link.name}]
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={link.name}
                    href={link.type === "route" ? link.to : `/#${link.to}`}
                    className="cursor-pointer text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    [{link.name}]
                  </RouterLink>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-primary/20 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                link.type === "scroll" && location === "/" ? (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    &gt; {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={link.name}
                    href={link.type === "route" ? link.to : `/#${link.to}`}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    &gt; {link.name}
                  </RouterLink>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
