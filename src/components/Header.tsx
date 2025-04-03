
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
      <Link to="/" className="flex items-center gap-2 text-primary-600 font-serif font-semibold text-xl">
        <Heart className="h-5 w-5 fill-primary-500 stroke-primary-500" />
        <span>Mom's Storybook</span>
      </Link>
      
      <nav className="flex gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
