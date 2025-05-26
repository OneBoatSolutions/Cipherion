"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ToggleTheme";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./animated/hoverButton";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 pt-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl " : "backdrop-blur-lg "
      }`}
    >
      {/* Tubelight effect gradient */}

      {/* Main header content */}
      <div className=" relative">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] flex items-center justify-center">
                  <span className="text-[color:var(--primary-foreground)] font-bold text-sm">
                    L
                  </span>
                </div>
                <span className="text-[color:var(--text-primary)] font-semibold text-xl">
                  Logo
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="relative">
              {/* Spinning border ring */}

              {/* Actual nav content */}
               {/* <HoverBorderGradient
                  className="bg-[rgba(144,83,241,0.16)]  backdrop-blur-[6px]"
                  containerClassName="bg-[rgba(34,14,67,0.16)] backdrop-blur-[6px]"
                > */}
              <nav className="relative z-10 hidden md:block  ">
               
                  <div className="flex items-center justify-around space-x-6 mr-2 ml-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="relative px-4 rounded-lg text-[color:var(--text-secondary)] group transition-all duration-300 overflow-hidden"
                      >
                        {/* Tubelight background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)/20] via-[color:var(--info)/20] to-[color:var(--accent)/20] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                        {/* Fake border on hover */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Nav Text */}
                        <span className="relative z-10 group-hover:text-[color:var(--text-primary)] group-hover:neon-text transition-all duration-500 ease-in-out">
                          {item.name}
                        </span>

                        {/* Glowing Underline */}
                        <span
                          className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[color:var(--accent)] rounded-full 
            transform -translate-x-1/2 origin-center 
            group-hover:w-full group-hover:shadow-[1px_1px_8px_var(--accent),0_0_32px_var(--accent)] 
            transition-all duration-500 ease-out"
                        />
                      </a>
                    ))}
                  </div>
              </nav>
                {/* </HoverBorderGradient> */}
            </div>

            {/* CTA Button and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <ModeToggle />
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
              >
                Get Started
              </HoverBorderGradient>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <ModeToggle />
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
          <div className="px-4 py-4 space-y-2 flex flex-col items-center  bg-[rgba(34,14,67,0.16)] backdrop-blur-[6px] border-t border-[color:var(--border)]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-alt)] transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)/20] via-[color:var(--info)/20] to-[color:var(--accent)/20] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                {/* Fake border on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Nav Text */}
                <span className="relative z-10 group-hover:text-[color:var(--text-primary)] group-hover:neon-text transition-all duration-500 ease-in-out">
                  {item.name}
                </span>

                {/* Glowing Underline */}
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[color:var(--accent)] rounded-full 
            transform -translate-x-1/2 origin-center 
            group-hover:w-full group-hover:shadow-[1px_1px_8px_var(--accent),0_0_32px_var(--accent)] 
            transition-all duration-500 ease-out"
                />
              </a>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className=" flex w-full justify-center dark:bg-background bg-white text-black dark:text-white  items-center space-x-2"
              >
                Get Started
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
