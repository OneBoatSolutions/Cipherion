"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { GradientBorder } from "./animated/gradient-border";
import { GlowingEffect } from "./animated/glowing-card";
import "../css/glassMorphism.css";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ToggleTheme";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
    { name: "Solution", href: "/solution", hasDropdown: true },
    // { name: "Contact", href: "/" },
  ];

  const solutionDropdown = {
    byIndustry: {
      title: "USE CASES",
      items: [
        {
          name: "Healthcare",
          href: "/solution/healthcare",
          icon: "🏥",
          description: "HIPAA compliant solutions for medical data",
        },
        {
          name: "Manufacturing",
          href: "/solution/manufacturing",
          icon: "🏭",
          description: "Secure industrial IoT and process data",
        },
        {
          name: "Fintech",
          href: "/solution/fintech",
          icon: "💳",
          description: "PCI DSS compliance for financial services",
        },
      ],
    },
    byCompliance: {
      title: "BY DATA TYPE",
      items: [
        {
          name: "Card data",
          href: "/solution/card-data",
          icon: "💳",
          description: "PCI DSS compliant payment processing",
        },
        {
          name: "Banking data",
          href: "/solution/banking-data",
          icon: "🏦",
          description: "Financial data protection & compliance",
        },
        {
          name: "PII",
          href: "/solution/pii",
          icon: "👤",
          description: "Personal information safeguarding",
        },
        {
          name: "HIPAA & ePHI",
          href: "/solution/hipaa-ephi",
          icon: "🏥",
          description: "Healthcare data protection standards",
        },
        {
          name: "Gen AI Privacy",
          href: "/solution/genai",
          icon: "🔐",
          description: "Securing sensitive Data from LLM's",
        },
        // {
        //   name: "File encryption",
        //   href: "/file-encryption",
        //   icon: "📁",
        //   description: "End-to-end file security solutions",
        // },
      ],
    },
  };

  return (
    <header
      className={`fixed top-0 pt-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl " : "backdrop-blur-lg "
      }`}
    >
      <div className="relative">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:px-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/bitmap.png" // path from /public
                  alt="Description of the image"
                  width={200}
                  height={200}
                  className="rounded-lg drop-shadow-[0_5px_15px_rgba(149,105,254,0.5)]"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="relative ">
              <GradientBorder
                borderRadius="rounded-full"
                duration={2}
                clockwise={false}
                gradientColors={{
                  primary: "hsl(280, 100%, 70%)",
                  highlight: "#8B5CF6",
                }}
              >
                <nav className="relative z-10 hidden md:block px-5 py-3 rounded-full">
                  <div className="flex items-center justify-around space-x-6 mr-2 ml-2">
                    {navItems.map((item) => (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() =>
                          item.hasDropdown && setDropdownOpen(true)
                        }
                        onMouseLeave={() =>
                          item.hasDropdown && setDropdownOpen(false)
                        }
                      >
                        <a
                          href={item.href}
                          className="relative px-4 rounded-lg text-[color:var(--text-secondary)] group transition-all duration-300 overflow-hidden flex items-center gap-1"
                        >
                          {/* Tubelight background glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)/20] via-[color:var(--info)/20] to-[color:var(--accent)/20] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                          {/* Nav Text */}
                          <span className="relative z-10 group-hover:text-[color:var(--text-primary)] transition-all duration-500 ease-in-out">
                            {item.name}
                          </span>

                          {/* Dropdown Arrow */}
                          {item.hasDropdown && (
                            <ChevronDown
                              size={16}
                              className={`relative z-10 transition-transform duration-300 ${
                                dropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          )}

                          {/* Glowing Underline */}
                          <span
                            className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[color:var(--accent)] rounded-full 
              transform -translate-x-1/2 origin-center 
              group-hover:w-full group-hover:shadow-[1px_1px_8px_var(--accent),0_0_32px_var(--accent)] 
              transition-all duration-500 ease-out"
                          />
                        </a>

                        {/* Glassmorphic Horizontal Dropdown Menu with GlowingEffect */}
                        {item.hasDropdown && (
                          <div
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-6 transition-all duration-300 ${
                              dropdownOpen
                                ? "opacity-100 visible translate-y-0 "
                                : "opacity-0 invisible -translate-y-2 rounded-2xl "
                            }`}
                          >
                            <div className="relative border border-[#43256e]/80 p-2 rounded-2xl bg-background/80 backdrop-filter backdrop-blur-2xl ">
                              <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                movementDuration={1.5}
                                borderWidth={1}
                                className="rounded-2xl"
                              />
                              <div className="relative bg-gradient-to-br from-[#18062a]/80 to-[#02010f] border border-[#43256e]/20 shadow-2xl p-6 min-w-[800px] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur">
  <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
    {/* Use Cases Section */}
    <div>
      <h3 className="text-[color:var(--accent)] font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[color:var(--accent)]"></span>
        {solutionDropdown.byIndustry.title}
      </h3>
      <div className="space-y-3">
        {solutionDropdown.byIndustry.items.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[color:var(--surface-alt)]/20 transition-all duration-200"
          >
            <span className="text-2xl">{subItem.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-[color:var(--text-primary)] group-hover:text-[color:var(--accent)] transition-colors">
                {subItem.name}
              </div>
              <div className="text-sm text-[color:var(--text-secondary)] mt-1">
                {subItem.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>


            <Separator orientation="vertical" className="bg-[color:var(--border)] h-auto" />

    <div>
      <h3 className="text-[color:var(--info)] font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 bg-[color:var(--info)] rounded-full"></span>
        {solutionDropdown.byCompliance.title}
      </h3>
      <div className="space-y-2">
        {solutionDropdown.byCompliance.items.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[color:var(--surface-alt)]/20 transition-all duration-200"
          >
            <span className="text-xl">{subItem.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-[color:var(--text-primary)] group-hover:text-[color:var(--info)] transition-colors">
                {subItem.name}
              </div>
              <div className="text-xs text-[color:var(--text-secondary)] mt-1">
                {subItem.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>

                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </GradientBorder>
            </div>

            <div className="hidden md:flex items-center space-x-4">
          
              <GradientBorder
                borderRadius="rounded-full"
                duration={2}
                clockwise={false}
                gradientColors={{
                  primary: "hsl(280, 100%, 70%)",
                  highlight: "#8B5CF6",
                }}
                className="bg-[var(--background)] "
              >
                <Button className="relative z-10  rounded-full text-accent-foreground outline-none border-0  bg-[var(--background)] hover:bg-transperent ">
                  Get Started
                </Button>
              </GradientBorder>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[color:var(--surface-alt)]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 py-4 space-y-2 flex flex-col items-center bg-[var(--background)]/40 backdrop-blur-xl border-t border-[color:var(--border)]">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-alt)]/20 transition-all duration-200"
                >
                  {item.name}
                </a>

                {/* Mobile Dropdown Content */}
                {item.hasDropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="text-[color:var(--accent)] font-semibold text-sm uppercase tracking-wider">
                      Use Cases
                    </div>
                    {solutionDropdown.byIndustry.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-alt)]/20 rounded-md transition-all duration-200 text-sm"
                      >
                        {subItem.icon} {subItem.name}
                      </a>
                    ))}

                    <div className="border-t border-[color:var(--border)] my-2"></div>

                    <div className="text-[color:var(--info)] font-semibold text-sm uppercase tracking-wider">
                      By Data Type
                    </div>
                    {solutionDropdown.byCompliance.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-alt)]/20 rounded-md transition-all duration-200 text-sm"
                      >
                        {subItem.icon} {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <GradientBorder
                borderRadius="rounded-full"
                duration={2}
                clockwise={false}
                gradientColors={{
                  primary: "hsl(280, 100%, 70%)",
                  highlight: "#8B5CF6",
                }}
                className="bg-[var(--background)] "
              >
                <Button className="relative z-10  rounded-full text-accent-foreground outline-none border-0  bg-[var(--background)] hover:bg-transperent ">
                  Get Started
                </Button>
              </GradientBorder>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
