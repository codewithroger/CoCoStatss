import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import gokhaleLogoPath from "@assets/download_1763797884548.jpg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Correlation", href: "#correlation-topic", icon: BookOpen },
    { name: "Coefficient", href: "#pearson-topic", icon: BookOpen },
    { name: "Covariance", href: "#covariance-topic", icon: BookOpen },
    { name: "Spearman", href: "#spearman-topic", icon: BookOpen },
    { name: "Quiz", href: "#quiz", icon: BookOpen },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src={gokhaleLogoPath} 
              alt="Gokhale Institute of Politics and Economics" 
              className="w-10 h-10 rounded-lg"
              data-testid="navbar-logo"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-none">Gokhale Institute of</span>
              <span className="text-xs text-muted-foreground">Politics and Economics</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start"
                  data-testid={`nav-mobile-${item.name.toLowerCase()}`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
