import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white h-full w-4/5 max-w-sm shadow-xl p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-primary">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="space-y-2">
          <Link href="/#features">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Features
            </div>
          </Link>
          <Link href="/tools">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Tools
            </div>
          </Link>
          <Link href="/#benefits">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Benefits
            </div>
          </Link>
          <Link href="/about">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Contact
            </div>
          </Link>
        </div>
        
        <div className="pt-5 mt-6 border-t border-gray-200">
          <Link href="/contact">
            <div className="text-neutral-700 hover:bg-gray-50 hover:text-primary block px-4 py-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-200" onClick={onClose}>
              Sign in
            </div>
          </Link>
          <div className="mt-4 px-4">
            <Button className="w-full shadow-md" asChild>
              <Link href="/contact">
                <span onClick={onClose}>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
