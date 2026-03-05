import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Github } from 'lucide-react';

const LOGO_URL = 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FpGjIB0vftgVpK9UXK5kyP1jyF992%2FJirehRehobothStatistics__f01ddd83.png?alt=media&token=a13239c9-91c6-4947-8047-0b56c55c38bc';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t py-12 md:py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={LOGO_URL} alt="Jireh Rehoboth Logo" className="h-10 w-auto" />
              <span className="font-display font-bold text-lg tracking-tight text-primary">
                Jireh Rehoboth
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering organizations with statistical intelligence, advanced analytics, and Six Sigma innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background border rounded-full hover:text-primary hover:border-primary transition-all shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background border rounded-full hover:text-primary hover:border-primary transition-all shadow-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background border rounded-full hover:text-primary hover:border-primary transition-all shadow-sm">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary/80">
              Solutions
            </h4>
            <ul className="space-y-4">
              {['Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Supply Chain'].map((item) => (
                <li key={item}>
                  <Link
                    to="/solutions"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary/80">
              Company
            </h4>
            <ul className="space-y-4">
              {['Products', 'Insights', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">joshuaezekiel334@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">Rehoboth House, Nelamangala, Bangalore, Karnataka- 562132</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <span>&copy; {currentYear} Jireh Rehoboth Statistics. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
