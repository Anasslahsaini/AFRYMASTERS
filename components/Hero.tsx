import React from 'react';
import { BookOpen, CheckCircle, Star } from 'lucide-react';
import { useShopify } from './ShopifyProvider';

const Hero: React.FC = () => {
  const { openCheckout } = useShopify();

  return (
    <div className="relative bg-brand-dark min-h-screen flex items-center overflow-hidden h-auto">
      {/* Background Image/Overlay - High quality appetizing food */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2000&auto=format&fit=crop" 
          alt="Crispy Air Fryer Food" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-36 pb-20 lg:pb-32 lg:pt-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-2">
              <Star size={14} className="fill-brand-orange" />
              LAUNCH OFFER
            </div>

            {/* Adjusted font sizes and line height for better PC scaling */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Cooking Finally Becomes <br/>
              <span className="text-brand-orange">Simple, Tasty... and Fun.</span>
            </h1>
            
            <div className="bg-white/5 border-l-4 border-brand-orange p-6 rounded-r-lg backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium italic">
                "Imagine opening your Air Fryer tonight and knowing exactly what to make—crispy, healthy, and ready in 15 minutes. No stress. No soggy leftovers."
                </p>
            </div>

            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle className="text-brand-orange flex-shrink-0" size={20} />
                <span className="font-medium">600 recipes tested to perfection.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle className="text-brand-orange flex-shrink-0" size={20} />
                <span className="font-medium">Eat healthy without losing the crunch.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle className="text-brand-orange flex-shrink-0" size={20} />
                <span className="font-medium">Instant PDF access on all your devices.</span>
              </div>
            </div>

            {/* CTA Section - Reordered: Price First, then Button */}
            <div className="pt-6 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center">
              
              {/* ENHANCED VISIBLE PRICE SECTION - Moved Before Button */}
              <div className="text-center sm:text-left cursor-pointer relative group p-2" onClick={openCheckout}>
                {/* Subtle Glow Background */}
                <div className="absolute -inset-2 bg-white/5 rounded-xl blur-md group-hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"></div>
                <div className="relative">
                    <div className="flex items-baseline gap-3 justify-center sm:justify-start">
                        <span className="text-gray-400 line-through text-2xl font-bold">$45</span>
                        <span className="text-6xl font-display font-bold text-brand-orange drop-shadow-md">$27</span>
                    </div>
                    <div className="text-sm text-gray-200 font-medium mt-1 flex items-center justify-center sm:justify-start gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Instant Digital Download
                    </div>
                </div>
              </div>

              {/* CTA Button - Updated Text */}
              <button 
                onClick={openCheckout}
                className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,107,0,0.4)] flex items-center justify-center gap-3"
              >
                <BookOpen size={22} />
                GET INSTANT ACCESS
              </button>
              
            </div>
          </div>

          {/* E-Book Mockup Representation */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end lg:pr-8">
             <div className="relative z-10 animate-float">
                {/* Book Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-brand-orange blur-[120px] opacity-30 rounded-full"></div>
                
                {/* 3D Book Mockup CSS */}
                <div className="relative w-[280px] sm:w-[350px] aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 border-l-8 border-l-gray-300 border-r border-gray-400 flex flex-col overflow-hidden group">
                    {/* Cover Image Simulation */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
                    
                    {/* Content Container - Redesigned for footer band */}
                    <div className="relative z-20 flex flex-col h-full justify-between text-center border border-white/10 rounded-r-2xl">
                        
                        {/* Top Section */}
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

                        {/* Bottom Footer Band - Flush */}
                        <div className="bg-black/70 backdrop-blur-xl p-5 border-t border-white/10 w-full">
                             <p className="font-bold text-sm text-white uppercase tracking-wider">75+ Essential Recipes</p>
                             <p className="text-gray-300 text-xs mt-1">From Breakfast to Dessert</p>
                        </div>
                    </div>

                    {/* Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-gray-900/50 to-transparent z-30"></div>
                </div>

                {/* Badge */}
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl z-40 border-4 border-brand-orange text-brand-dark">
                    <span className="font-bold text-lg leading-none text-brand-dark">75+</span>
                    <span className="font-black text-xl leading-none text-brand-orange uppercase">Recipes</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;