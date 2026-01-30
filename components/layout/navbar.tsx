"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ThemeSwitcher } from "@/components/theme";
import { navigation, siteConfig } from "@/lib/constants";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-foreground"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-muted">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-primary"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="hidden sm:inline">{siteConfig.shortName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.main.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                        pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-72 rounded-lg border border-border bg-surface/95 backdrop-blur-md p-2 shadow-medium"
                        >
                          {navigation.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block rounded-md px-3 py-2 transition-colors hover:bg-surface-hover"
                            >
                              <div className="text-sm font-medium text-foreground">
                                {service.name}
                              </div>
                              <div className="text-xs text-foreground-muted">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons & Theme Switcher */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <ThemeSwitcher />
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground-muted hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-surface/95 backdrop-blur-md"
          >
            <div className="section-container py-4 space-y-4">
              {navigation.main.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="space-y-2">
                      <div className="text-sm font-medium text-foreground-muted px-2">
                        Services
                      </div>
                      {navigation.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-2 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border space-y-2">
                <div className="px-2 pb-2">
                  <ThemeSwitcher />
                </div>
                <Link href="/contact" className="block">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
