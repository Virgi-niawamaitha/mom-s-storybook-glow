import React, { useEffect, useRef } from 'react';
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Card } from '@/components/ui/card';

const memories = [
  {
    title: "Birth & Childhood",
    year: "The Beginning",
    description: "From the day you were born, your spirit and strength were evident. Growing up, you carried a light that would guide many.",
    imageUrl: "/images/memories/childhood.jpg"
  },
  {
    title: "Motherhood Begins",
    year: "A New Chapter",
    description: "The day you became a mother, your life transformed. You embraced this role with all your heart, showering us with unconditional love from the very start.",
    imageUrl: "/images/memories/motherhood.jpg"
  },
  {
    title: "Sacrifices & Strength",
    year: "The Pillar",
    description: "Raising us alone was never easy, yet you made it look effortless. Working tirelessly to secure our future, you never complained about the challenges you faced.",
    imageUrl: "/images/memories/us.jpg"
  },
  {
    title: "Blue Post Adventures",
    year: "Unforgettable Times",
    description: "Remember those trips to Blue Post? The laughter, the stories, the pure joy of being together – these moments are etched in our hearts forever.",
    imageUrl: "/images/memories/bluepost.jpg"
  },
  {
    title: "Two Rivers Memories",
    year: "Shopping & Ice Cream",
    description: "Our visits to Two Rivers weren't just about shopping; they were about creating memories. Your smile as we enjoyed ice cream together is a picture we'll always treasure.",
    imageUrl: "/images/memories/two rivers.jpg"
  },
  {
    title: "Green Span Mall Days",
    year: "Weekend Treats",
    description: "Those weekend trips to Green Span Mall were our little escape. You always made sure we had fun, even when things were tight.",
    imageUrl: "/images/memories/greenspan.jpg"
  },
  {
    title: "KFC Celebrations",
    year: "Simple Joys",
    description: "KFC wasn't just food; it was our celebration spot. Every achievement, no matter how small, was worthy of celebration in your eyes.",
    imageUrl: "/images/memories/kfc.jpg"
  },
  {
    title: "Late Night Homework",
    year: "Education First",
    description: "You stayed up countless nights helping us with homework, emphasizing the importance of education. Your dedication to our learning shaped our future.",
    imageUrl: "/images/memories/late homework.jpg"
  },
  {
    title: "Cartoon Saturdays",
    year: "Bonding Time",
    description: "Saturday mornings were reserved for cartoons. Those shared laughs over animated adventures created bonds that time cannot break.",
    imageUrl: "/images/memories/cartoons.jpg"
  },
  {
    title: "Sundowner Songs",
    year: "Musical Evenings",
    description: "As the sun set, music filled our home. Those songs became the soundtrack of our childhood, bringing comfort and joy.",
    imageUrl: "/images/memories/sundowner.jpg"
  },
  {
    title: "The Future Ahead",
    year: "Continuing Legacy",
    description: "Your love, lessons, and legacy live on in us. Wherever we go, whatever we achieve, it's all because of the foundation you built.",
    imageUrl: "/images/memories/future.jpg"
  },
];

const MemoriesPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const memoryItems = document.querySelectorAll('.memory-item');
    memoryItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        memoryItems.forEach((item) => {
          observerRef.current?.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-6 md:py-12 px-4 relative">
        <RoseDecoration position="top-left" size="md" className="hidden md:block" />
        <RoseDecoration position="bottom-right" size="md" className="hidden md:block" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-primary-600 text-center mb-8 md:mb-12">Memory Lane</h2>
          
          <div className="space-y-8 md:space-y-12">
            {memories.map((memory, index) => (
              <div key={index} className="memory-item opacity-0" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="ml-2 md:ml-8">
                  <h3 className="text-lg md:text-xl font-serif text-primary-600 mb-1">{memory.title}</h3>
                  <div className="text-sm text-primary-400 mb-2">{memory.year}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
                    <div className={`polaroid transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} mx-auto md:mx-0 max-w-sm w-full`}>
                      <div className="memory-photo">
                        <img 
                          src={memory.imageUrl} 
                          alt={memory.title} 
                          loading="lazy"
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="polaroid-caption">
                        {memory.title} - {memory.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <p className="text-foreground/80 text-sm md:text-base">{memory.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="ml-2 md:ml-4 mt-8 md:mt-12">
              <Card className="p-4 md:p-6 bg-white/90 shadow-lg border border-primary-200">
                <p className="font-serif text-base md:text-lg text-primary-700">
                  "No matter where we go, no matter how far we are, your love and lessons are forever part of us."
                </p>
                
                <div className="mt-4 text-sm text-primary-500">
                  Happy Birthday, Mom! We love you beyond words.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MemoriesPage;
