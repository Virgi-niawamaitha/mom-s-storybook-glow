
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Heart } from 'lucide-react';

const compliments = [
  "Mom, you are the rarest diamond in the world—precious, strong, and irreplaceable.",
  "You are the sun that gives us light, the rose that makes life beautiful.",
  "You taught us that nothing is impossible, and because of you, we dream fearlessly.",
  "Your love is the greatest gift we've ever received.",
  "A mother, a father, a friend—there is no one like you.",
  "You give without expecting, love without limits, and stand strong even in storms.",
  "If love had a name, it would be yours, Mom.",
  "Your faith in God has taught us to believe in miracles.",
  "The sacrifices you made for us will never be forgotten.",
  "Your strength in hard times showed us what true courage means.",
  "You created a home filled with love, laughter, and learning.",
  "Every day with you is a blessing we cherish.",
  "Your wisdom guides us even when you're not beside us.",
  "The world is a better place because you're in it.",
  "You taught us to be kind, to be strong, and to be true to ourselves.",
  "Your smile brightens our darkest days.",
  "You're the compass that helps us find our way.",
  "In your eyes, we see unconditional love.",
  "Because of you, we know what it means to be loved completely.",
  "Your legacy of love will continue through generations."
];

const ComplimentsPage: React.FC = () => {
  const [currentCompliment, setCurrentCompliment] = useState<string>("");
  const [usedCompliments, setUsedCompliments] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomCompliment = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If all compliments have been used, reset the used list
    if (usedCompliments.length === compliments.length) {
      setUsedCompliments([currentCompliment]);
    }
    
    // Get compliments that haven't been used yet
    const availableCompliments = compliments.filter(
      compliment => !usedCompliments.includes(compliment)
    );
    
    // Select a random compliment from available ones
    const randomIndex = Math.floor(Math.random() * availableCompliments.length);
    const newCompliment = availableCompliments[randomIndex];
    
    // Animate out
    setTimeout(() => {
      setCurrentCompliment("");
      
      // Animate in new compliment after a brief pause
      setTimeout(() => {
        setCurrentCompliment(newCompliment);
        setUsedCompliments(prev => [...prev, newCompliment]);
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  // Set initial compliment
  useEffect(() => {
    if (!currentCompliment && compliments.length > 0) {
      const initialCompliment = compliments[Math.floor(Math.random() * compliments.length)];
      setCurrentCompliment(initialCompliment);
      setUsedCompliments([initialCompliment]);
    }
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 flex flex-col items-center justify-center relative">
        <RoseDecoration position="top-right" size="md" />
        <RoseDecoration position="bottom-left" size="md" />
        
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-600 mb-12">Words From The Heart</h2>
          
          <div className="relative mb-10">
            <div 
              className={`compliment-card transition-all duration-500 ease-in-out min-h-[200px] flex items-center justify-center ${
                currentCompliment ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="absolute -top-3 -right-3">
                <Heart className="h-8 w-8 fill-primary-200 stroke-primary-400" />
              </div>
              
              <p className="text-xl md:text-2xl font-serif text-primary-700 leading-relaxed">
                {currentCompliment}
              </p>
            </div>
          </div>
          
          <Button
            onClick={getRandomCompliment}
            disabled={isAnimating}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Heart className="h-5 w-5 mr-2 fill-white" />
            <span>Give Me a Compliment</span>
          </Button>
          
          <p className="mt-6 text-sm text-foreground/60 max-w-md mx-auto">
            Every compliment here is a reflection of the love and gratitude we feel for you each day.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default ComplimentsPage;
