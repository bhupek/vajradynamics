import Link from 'next/link';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap size={24} className="text-secondary" />
              <span className="font-rajdhani font-bold text-xl">Vajra Dynamics</span>
            </Link>
            <p className="text-sm">Forging Indestructible Defense Solutions</p>
          </div>
          <div>
            <h3 className="font-rajdhani font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-secondary transition-colors">Our Solutions</Link></li>
              <li><Link href="/innovation-lab" className="hover:text-secondary transition-colors">Innovation Lab</Link></li>
              <li><Link href="/newsroom" className="hover:text-secondary transition-colors">Newsroom</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-rajdhani font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@vajradynamics.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
          <div>
            <h3 className="font-rajdhani font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Vajra Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;