import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-primary font-bold text-xl cursor-pointer">getBadger</span>
              </Link>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/#features">
                <a className={`${location === '/#features' ? 'text-primary' : 'text-neutral-700'} hover:text-primary px-3 py-2 text-sm font-medium`}>Features</a>
              </Link>
              <Link href="/tools">
                <a className={`${location === '/tools' ? 'text-primary' : 'text-neutral-700'} hover:text-primary px-3 py-2 text-sm font-medium`}>Tools</a>
              </Link>
              <Link href="/#benefits">
                <a className={`${location === '/#benefits' ? 'text-primary' : 'text-neutral-700'} hover:text-primary px-3 py-2 text-sm font-medium`}>Benefits</a>
              </Link>
              <Link href="/about">
                <a className={`${location === '/about' ? 'text-primary' : 'text-neutral-700'} hover:text-primary px-3 py-2 text-sm font-medium`}>About</a>
              </Link>
              <Link href="/contact">
                <a className={`${location === '/contact' ? 'text-primary' : 'text-neutral-700'} hover:text-primary px-3 py-2 text-sm font-medium`}>Contact</a>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <a className="text-neutral-700 hover:text-primary text-sm font-medium">Sign in</a>
            </Link>
            <Button asChild>
              <Link href="/contact">
                <a>Get Started</a>
              </Link>
            </Button>
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Open main menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
