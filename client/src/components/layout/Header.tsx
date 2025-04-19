import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import MobileMenu from './MobileMenu';
import { LogOut, Menu, User } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logoutMutation } = useAuth();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLogout = () => logoutMutation.mutate();

  const isActive = (path: string) => location === path ? 'text-primary font-semibold' : 'text-neutral-700';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-primary font-bold text-xl cursor-pointer tracking-tight">
                  <span className="bg-primary text-white px-2 py-1 rounded-md mr-1">get</span>
                  Badger
                </span>
              </Link>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/#features">
                <span className={`${isActive('/#features')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>Features</span>
              </Link>
              <Link href="/tools">
                <span className={`${isActive('/tools')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>Tools</span>
              </Link>
              <Link href="/#benefits">
                <span className={`${isActive('/#benefits')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>Benefits</span>
              </Link>
              <Link href="/about">
                <span className={`${isActive('/about')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>About</span>
              </Link>
              <Link href="/contact">
                <span className={`${isActive('/contact')} hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}>Contact</span>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:bg-muted">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/auth">
                  <span className="text-neutral-700 hover:text-primary text-sm font-medium transition-colors duration-200 cursor-pointer">Sign in</span>
                </Link>
                <Button asChild className="shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Link href="/auth">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </>
            )}
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
