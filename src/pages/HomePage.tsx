
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import RoseDecoration from '@/components/RoseDecoration';
import PageTransition from '@/components/PageTransition';
import { Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden py-20 px-4">
        {/* Rose decorations */}
        <RoseDecoration position="top-left" size="lg" />
        <RoseDecoration position="bottom-right" size="lg" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex">
            <span className="relative inline-block">
              <Sparkles className="w-8 h-8 text-secondary-400 absolute -top-4 -right-4 animate-pulse-gentle" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-600 mb-6 leading-tight">
            To the strongest, most loving woman I know
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Mom, this is for you. A journey through your love, strength, and all the beautiful moments you've created for us.
            </p>
            
            <div className="rose-border p-6 mb-10 bg-white/90 backdrop-blur-sm">
              <p className="italic text-foreground/70 font-serif">
                "You are a rare diamond, a resilient rose, and a guiding light in our lives. 
                You've taught us that nothing is impossible with God, and through your strength, 
                we have learned to fight for our dreams."
              </p>
            </div>
            
            <Button 
              onClick={() => navigate('/storybook')} 
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 glow-effect"
            >
              <span className="mr-2">Enter Storybook</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
