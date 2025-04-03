
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RoseDecoration from '@/components/RoseDecoration';
import PageTransition from '@/components/PageTransition';

const chapters = [
  {
    title: "The Woman of Strength & Love",
    content: (
      <>
        <p className="mb-4">Mom, you are a rare diamond, a resilient rose, and a guiding light in our lives.</p>
        <p className="mb-4">Your strong faith in God has taught us to believe in miracles and to trust in divine timing. In every challenge, you've shown us what true strength looks like.</p>
        <p className="mb-4">Your empathy knows no bounds. You give without expecting anything in return, and your generosity extends beyond our family to everyone you meet.</p>
        <p>Through your resilience, you've taught us that no obstacle is too great when we have faith and determination. You are strength personified.</p>
      </>
    )
  },
  {
    title: "A Mother, A Father, A Best Friend",
    content: (
      <>
        <p className="mb-4">You took on both roles of mother and father, ensuring we never lacked anything. Your selflessness knows no bounds.</p>
        <p className="mb-4">The sacrifices you made to finance our education, our rent, and our dreams will never be forgotten. You put your own needs aside to give us wings to fly.</p>
        <p className="mb-6">You created a safe space where we could be ourselves, where we could fail and try again, where we could dream without limits.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <h4 className="font-serif text-primary-700 mb-2">Through Our Eyes</h4>
          <p className="italic text-sm">As children, we saw you as a superhero – always strong, always there, always ready with a solution. Now as adults, we see you as the irreplaceable pillar who shaped us into who we are today.</p>
        </div>
      </>
    )
  },
  {
    title: "Adventures, Memories & Sundowner Songs",
    content: (
      <>
        <p className="mb-4">Remember those trips to Blue Post, Two Rivers, Green Span Mall, and our favorite KFC visits? Those weren't just outings; they were chapters in our life story that we'll treasure forever.</p>
        <p className="mb-4">The late nights you stayed up to help us finish homework, the early mornings you prepared us for school, the weekends filled with laughter and learning.</p>
        <p className="mb-4">The cartoons we watched together created a bond that goes beyond the screen. Those shared moments of joy are etched in our memories.</p>
        <p>And those sundowner songs... they still play in our hearts, reminding us of peaceful evenings in your loving presence.</p>
      </>
    )
  },
  {
    title: "The Future & Our Promise to You",
    content: (
      <>
        <p className="mb-4">We want you to know that all your sacrifices weren't in vain. We are determined to succeed and fulfill all the promises we made to you as kids.</p>
        <p className="mb-6">Your guidance has set us on a path of purpose, and we strive every day to make you proud.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <p className="font-serif text-primary-700">You are our best friend, our safe space, and the strongest pillar of our lives. We owe so much to you, and one day, we will give you the world, because you deserve nothing less.</p>
        </div>
        <p className="text-center mt-8">
          <a href="/compliments" className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Click to See Your Daily Compliment →
          </a>
        </p>
      </>
    )
  }
];

const StorybookPage: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextChapter = () => {
    if (currentChapter < chapters.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentChapter(prevChapter => prevChapter + 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapter > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentChapter(prevChapter => prevChapter - 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextChapter();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousChapter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentChapter, isAnimating]);

  return (
    <PageTransition>
      <div className="py-12 px-4 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative">
        <RoseDecoration position="top-right" size="md" />
        <RoseDecoration position="bottom-left" size="md" />
        
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-600 text-center mb-8">Our Storybook</h2>
          
          <div className="relative">
            {/* Book pages */}
            <div 
              className={`storybook-page ${isAnimating ? 'page-turn' : ''}`}
            >
              <div className="absolute top-4 right-4 text-primary-300 text-sm font-serif">
                Chapter {currentChapter + 1} of {chapters.length}
              </div>
              
              <h3 className="text-2xl font-serif text-primary-600 mb-6 max-w-lg">
                {chapters[currentChapter].title}
              </h3>
              
              <div className="prose text-foreground/80 max-w-none">
                {chapters[currentChapter].content}
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={goToPreviousChapter}
                disabled={currentChapter === 0 || isAnimating}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={goToNextChapter}
                disabled={currentChapter === chapters.length - 1 || isAnimating}
                variant="outline"
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StorybookPage;
