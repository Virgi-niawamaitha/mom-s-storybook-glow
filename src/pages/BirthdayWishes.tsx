
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Card, CardContent } from "@/components/ui/card";
import confetti from 'canvas-confetti';

const BirthdayWishes: React.FC = () => {
  const navigate = useNavigate();
  const [activeWish, setActiveWish] = useState(0);
  
  const birthdayWishes = [
    {
      title: "Happy Birthday, Mom!",
      message: "To the woman who gave us life and love, we wish you the happiest of birthdays! May your day be filled with as much joy as you've brought into our lives."
    },
    {
      title: "Our Guiding Light",
      message: "On your special day, we celebrate not just your birth, but the countless ways you've illuminated our paths. You deserve all the happiness in the world today and always."
    },
    {
      title: "A Heart of Gold",
      message: "Mom, your heart has space for everyone. Today, we hope your heart feels the abundance of love we have for you. Happy Birthday to our greatest blessing!"
    },
    {
      title: "Our Pillar of Strength",
      message: "Through every storm, you've stood tall. On your birthday, we want you to know that your strength has been our foundation. We love you beyond measure."
    },
    {
      title: "Birthday Wishes for a Queen",
      message: "To the queen of our hearts, may your throne always be surrounded by love, laughter, and endless joy. Happy Birthday, our beautiful mother!"
    }
  ];

  useEffect(() => {
    // Launch birthday confetti when the page loads
    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };

    launchConfetti();
    
    const interval = setInterval(launchConfetti, 3000);
    
    const wishInterval = setInterval(() => {
      setActiveWish(prev => (prev + 1) % birthdayWishes.length);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(wishInterval);
    };
  }, []);

  const handleCardClick = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const navigateToPage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative bg-gradient-to-b from-primary-50 to-secondary-50">
        <RoseDecoration position="top-left" size="lg" />
        <RoseDecoration position="bottom-right" size="lg" />
        
        <div className="birthday-balloons">
          {Array.from({ length: 15 }).map((_, index) => (
            <div 
              key={index} 
              className="balloon rose-balloon"
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-primary-600 mb-6 animate-float glow-text">
            Happy Birthday, Mom!
          </h2>
          
          <p className="text-xl text-primary-700 mb-12 animate-pulse-gentle">
            Today is all about celebrating the amazing woman you are!
          </p>
          
          <div className="birthday-cake mb-12">
            <div className="cake-base">
              <div className="cake-top"></div>
              <div className="cake-middle"></div>
              <div className="cake-bottom"></div>
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index} 
                className="candle"
                style={{ 
                  left: `${20 + index * 15}%`
                }}
              >
                <div className="flame"></div>
              </div>
            ))}
          </div>
          
          <Card 
            className="mb-12 transform hover:scale-105 transition-all duration-300 shadow-xl birthday-card"
            onClick={handleCardClick}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-primary-600 mb-4">
                {birthdayWishes[activeWish].title}
              </h3>
              <p className="text-foreground/80 italic">
                "{birthdayWishes[activeWish].message}"
              </p>
              <div className="mt-4 text-sm text-primary-400">Click for a surprise!</div>
            </CardContent>
          </Card>
          
          <div className="gift-section">
            <h3 className="text-2xl font-serif text-primary-600 mb-6">
              Our Gifts To You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className="gift-box memory-gift" 
                onClick={() => navigateToPage('memories')}
                role="button"
                tabIndex={0}
                aria-label="View Memories"
              >
                <div className="gift-lid"></div>
                <div className="gift-box-body">
                  <span className="text-white">Memories</span>
                </div>
              </div>
              
              <div 
                className="gift-box compliment-gift" 
                onClick={() => navigateToPage('compliments')}
                role="button"
                tabIndex={0}
                aria-label="View Compliments"
              >
                <div className="gift-lid"></div>
                <div className="gift-box-body">
                  <span className="text-white">Compliments</span>
                </div>
              </div>
              
              <div 
                className="gift-box story-gift" 
                onClick={() => navigateToPage('storybook')}
                role="button"
                tabIndex={0}
                aria-label="View Stories"
              >
                <div className="gift-lid"></div>
                <div className="gift-box-body">
                  <span className="text-white">Stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BirthdayWishes;
