"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Innovation Lab', path: '/innovation-lab' },
    { name: 'Newsroom', path: '/newsroom' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap size={32} className="text-secondary" />
          <span className="font-rajdhani font-bold text-2xl">Vajra Dynamics</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-rajdhani text-lg hover:text-secondary transition-colors ${
                pathname === item.path ? 'text-secondary' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-rajdhani text-lg hover:text-secondary transition-colors ${
                    pathname === item.path ? 'text-secondary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;