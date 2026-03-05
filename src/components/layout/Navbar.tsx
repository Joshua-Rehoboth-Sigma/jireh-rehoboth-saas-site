import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FpGjIB0vftgVpK9UXK5kyP1jyF992%2FJirehRehobothStatistics__f01ddd83.png?alt=media&token=a13239c9-91c6-4947-8047-0b56c55c38bc';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Products', to: '/products' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Insights', to: '/insights' },
    { label: 'About', to: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={LOGO_URL} alt="Jireh Rehoboth Logo" className="h-12 w-auto" />
              <span className="font-display font-bold text-xl tracking-tight text-primary hidden sm:block">
                Jireh Rehoboth
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: 'text-primary' }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="rounded-full px-6">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all"
                activeProps={{ className: 'text-primary bg-muted' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-primary hover:bg-muted rounded-md transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 
