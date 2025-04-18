import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        <Link href="/#features">
          <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
            Features
          </a>
        </Link>
        <Link href="/tools">
          <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
            Tools
          </a>
        </Link>
        <Link href="/#benefits">
          <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
            Benefits
          </a>
        </Link>
        <Link href="/about">
          <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
            Contact
          </a>
        </Link>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <Link href="/contact">
            <a className="text-neutral-700 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={onClose}>
              Sign in
            </a>
          </Link>
          <Button className="w-full mt-2" asChild>
            <Link href="/contact">
              <a onClick={onClose}>Get Started</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
