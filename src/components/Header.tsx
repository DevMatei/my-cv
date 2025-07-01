import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'var(--color-background)cc',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3 py-2 font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  color: location.pathname === item.path 
                    ? 'var(--color-primary)' 
                    : 'var(--color-textSecondary)' 
                }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <button
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--color-text)' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ThemeSelector />
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 font-medium transition-all duration-300 rounded-lg"
                  style={{ 
                    color: location.pathname === item.path 
                      ? 'var(--color-primary)' 
                      : 'var(--color-textSecondary)',
                    backgroundColor: location.pathname === item.path 
                      ? 'var(--color-primary)20' 
                      : 'transparent'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}