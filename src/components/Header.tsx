import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Cake, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
      <Link to="/" className="flex items-center gap-2 text-primary-600 font-serif font-semibold text-lg md:text-xl">
        <Heart className="h-5 w-5 fill-primary-500 stroke-primary-500" />
        <span>Mom's Storybook</span>
      </Link>
      
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6">
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/storybook">Storybook</Link>
        </Button>
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/memories">Memory Lane</Link>
        </Button>
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/compliments">Compliments</Link>
        </Button>
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary flex items-center gap-1">
          <Link to="/birthday">
            <Cake className="h-4 w-4 mr-1" />
            Birthday Wishes
          </Link>
        </Button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 shadow-lg md:hidden py-4 px-4 flex flex-col gap-2">
          <Button asChild variant="ghost" className="w-full justify-start font-medium text-foreground/80 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start font-medium text-foreground/80 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            <Link to="/storybook">Storybook</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start font-medium text-foreground/80 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            <Link to="/memories">Memory Lane</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start font-medium text-foreground/80 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            <Link to="/compliments">Compliments</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start font-medium text-foreground/80 hover:text-primary flex items-center gap-1" onClick={() => setIsMenuOpen(false)}>
            <Link to="/birthday">
              <Cake className="h-4 w-4 mr-1" />
              Birthday Wishes
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
