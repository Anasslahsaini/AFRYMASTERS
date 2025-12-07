import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Clock, Star, Flame } from 'lucide-react';
import { useShopify } from './ShopifyProvider';

const Hero: React.FC = () => {
  const { openCheckout } = useShopify();
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return { minutes: 14, seconds: 59 }; // Reset loop
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-brand-dark min-h-screen flex items-center overflow-hidden h-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2000&auto=format&fit=crop" 
          alt="Crispy Air Fryer Food" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-32 pb-20 lg:pb-32 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Offer */}
          <div className="text-white space-y-6 animate-fade-in-up text-center lg:text-left">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-2 animate-pulse-fast">
              <Flame size={14} className="fill-red-500" />
              <span className="uppercase">Selling Fast • 67% OFF Today</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
              Make Every Air Fryer Meal <br/>
              <span className="text-brand-orange">Crispy, Fast, and Fail-Proof.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              600 Tested Recipes + 3 Free Bonuses — Today Only. <br/>
              Instant Digital Download. No Fluff. Just Results.
            </p>

            {/* Countdown */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-lg inline-flex items-center gap-3">
               <Clock size={20} className="text-brand-orange" />
               <span className="text-sm font-semibold tracking-wide">
                 ⏳ Offer Ends In: <span className="text-brand-orange font-bold text-lg w-16 inline-block text-left">{timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
               </span>
            </div>

            {/* Price & CTA Block */}
            <div className="pt-6 flex flex-col items-center lg:items-start gap-4">
              
              <div className="flex items-end gap-3">
                 <span className="text-gray-400 line-through text-2xl font-bold mb-2">Reg. $29</span>
                 <span className="text-7xl font-display font-bold text-brand-orange leading-none drop-shadow-lg">$9.99</span>
              </div>
              <p className="text-green-400 font-bold text-sm uppercase tracking-wide">
                <CheckCircle size={14} className="inline mr-1" />
                Instant Access via Email
              </p>

              <button 
                onClick={openCheckout}
                className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white px-8 py-5 rounded-xl font-bold text-2xl uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,107,0,0.5)] flex items-center justify-center gap-3 mt-2"
              >
                Get Instant Access — $9.99
                <BookOpen size={24} />
              </button>
              
              <div className="flex gap-4 text-xs text-gray-400 font-medium mt-2">
                 <span>🔒 Secure Payment</span>
                 <span>⚡️ Instant PDF Download</span>
              </div>
            </div>
          </div>

          {/* Right Column: Book Mockup */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end lg:pr-8">
             <div className="relative z-10 animate-float">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-brand-orange blur-[120px] opacity-30 rounded-full"></div>
                
                <div className="relative w-[280px] sm:w-[350px] aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 border-l-8 border-l-gray-300 border-r border-gray-400 flex flex-col overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
                    
                    <div className="relative z-20 flex flex-col h-full justify-between text-center border border-white/10 rounded-r-2xl">
                        <div className="p-6 sm:p-8">
                            <div className="bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit mx-auto mb-4 shadow-md tracking-wider uppercase">
                              FRY MASTERS
                            </div>
                            <div className="mt-4">
                              <h3 className="font-display text-4xl sm:text-5xl text-white font-bold leading-none mb-2 drop-shadow-lg">AIR FRYER</h3>
                              <p className="text-brand-orange font-bold text-4xl sm:text-5xl tracking-[0.1em] uppercase font-display drop-shadow-md leading-none">MAGIC</p>
                              <p className="text-white mt-4 font-bold text-lg sm:text-xl tracking-wide">The Complete Cookbook</p>
                            </div>
                        </div>
                        <div className="bg-black/70 backdrop-blur-xl p-5 border-t border-white/10 w-full">
                             <p className="font-bold text-sm text-white uppercase tracking-wider">600+ Tested Recipes</p>
                             <p className="text-gray-300 text-xs mt-1">From Breakfast to Dessert</p>
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-gray-900/50 to-transparent z-30"></div>
                </div>

                {/* Savings Badge */}
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-brand-orange rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl z-40 border-4 border-white text-white">
                    <span className="font-black text-3xl leading-none">67%</span>
                    <span className="font-bold text-sm leading-none uppercase mt-1">OFF</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;